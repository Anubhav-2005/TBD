import { Resend } from "resend";
import { env } from "@/config/env";

export function getEmailClient() {
  if (!env.RESEND_API_KEY || !env.EMAIL_FROM) throw new Error("Resend is not configured");
  return { client: new Resend(env.RESEND_API_KEY), from: env.EMAIL_FROM };
}
