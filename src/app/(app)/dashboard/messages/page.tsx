"use client";
import { useState } from "react";
const conversations = [
  {
    name: "Meridian Health",
    preview: "The revised referral flow is ready for review.",
    time: "10:42",
    unread: 2,
  },
  {
    name: "Northstar Living",
    preview: "Can we compare the two visual directions?",
    time: "Yesterday",
    unread: 0,
  },
  {
    name: "Internal / Growth",
    preview: "New lead attribution notes are in.",
    time: "Mon",
    unread: 0,
  },
];
export default function MessagesPage() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState<string[]>([]);
  return (
    <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#dedde6] bg-white lg:grid-cols-[300px_1fr]">
      <aside className="border-b border-[#dedde6] lg:border-r lg:border-b-0">
        <div className="border-b border-[#dedde6] p-5">
          <p className="text-lg font-semibold">Messages</p>
          <input
            placeholder="Search conversations"
            className="mt-4 w-full rounded-lg bg-[#f7f7fb] px-3 py-2 text-sm outline-none"
          />
        </div>
        {conversations.map((item) => (
          <button
            key={item.name}
            className="w-full border-b border-[#f0eff4] p-4 text-left hover:bg-[#fafafe]"
          >
            <div className="flex justify-between">
              <p className="text-sm font-medium">{item.name}</p>
              <span className="text-xs text-[#716d82]">{item.time}</span>
            </div>
            <p className="mt-1 truncate text-xs text-[#716d82]">{item.preview}</p>
            {item.unread > 0 && (
              <span className="mt-2 inline-grid size-4 place-items-center rounded-full bg-violet-600 text-[9px] text-white">
                {item.unread}
              </span>
            )}
          </button>
        ))}
      </aside>
      <section className="min-h-[560px]">
        <div className="border-b border-[#dedde6] p-5">
          <p className="font-medium">Meridian Health</p>
          <p className="mt-1 text-xs text-emerald-700">● 3 collaborators active</p>
        </div>
        <div className="space-y-4 p-5">
          <div className="max-w-md rounded-2xl rounded-tl-sm bg-[#f1f0f7] p-3 text-sm">
            The revised referral flow is ready for review. We’ve included the scheduling edge cases
            from Friday.
          </div>
          <div className="ml-auto max-w-md rounded-2xl rounded-tr-sm bg-[#171924] p-3 text-sm text-white">
            Great—sending this to the clinical team now. I’ll collect feedback in the approval
            thread.
          </div>
          {sent.map((item) => (
            <div
              key={item}
              className="ml-auto max-w-md rounded-2xl rounded-tr-sm bg-[#171924] p-3 text-sm text-white"
            >
              {item}
            </div>
          ))}
        </div>
        <form
          action={(data) => {
            const next = String(data.get("message") ?? "").trim();
            if (next) {
              setSent((previous) => [...previous, next]);
              setMessage("");
            }
          }}
          className="mt-auto flex gap-2 border-t border-[#dedde6] p-4"
        >
          <input
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Write a message…"
            className="flex-1 rounded-lg bg-[#f7f7fb] px-3 py-2 text-sm outline-none"
          />
          <button className="rounded-lg bg-[#171924] px-4 text-sm text-white">Send</button>
        </form>
      </section>
    </div>
  );
}
