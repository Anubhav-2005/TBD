import Redis from "ioredis";
import { env } from "@/config/env";

const redis = env.REDIS_URL
  ? new Redis(env.REDIS_URL, { maxRetriesPerRequest: 1, lazyConnect: true })
  : null;
const local = new Map<string, { count: number; resetAt: number }>();

export async function rateLimit(key: string, limit = 60, windowSeconds = 60) {
  const namespacedKey = `rate-limit:${key}`;
  if (redis) {
    const count = await redis.incr(namespacedKey);
    if (count === 1) await redis.expire(namespacedKey, windowSeconds);
    const ttl = await redis.ttl(namespacedKey);
    return {
      success: count <= limit,
      remaining: Math.max(0, limit - count),
      reset: Math.max(0, ttl),
    };
  }
  const now = Date.now();
  const item = local.get(namespacedKey);
  const next =
    !item || item.resetAt <= now
      ? { count: 1, resetAt: now + windowSeconds * 1000 }
      : { ...item, count: item.count + 1 };
  local.set(namespacedKey, next);
  return {
    success: next.count <= limit,
    remaining: Math.max(0, limit - next.count),
    reset: Math.ceil((next.resetAt - now) / 1000),
  };
}
