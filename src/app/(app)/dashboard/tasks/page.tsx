"use client";
import { useState } from "react";
import { tasks } from "@/config/operations";
export default function TasksPage() {
  const [done, setDone] = useState<string[]>([]);
  const columns = [
    ["Backlog", tasks.slice(3)],
    ["In progress", tasks.slice(1, 3)],
    ["Ready for review", tasks.slice(0, 1)],
  ];
  return (
    <div className="mx-auto max-w-7xl">
      <p className="font-mono text-xs tracking-[.16em] text-violet-700">DELIVERY / TASKS</p>
      <div className="mt-2 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-[-.05em]">The work, visible.</h1>
          <p className="mt-2 text-sm text-[#716d82]">
            Kanban view · Your assignments and team priorities
          </p>
        </div>
        <button className="rounded-lg bg-[#171924] px-3 py-2 text-sm text-white">+ New task</button>
      </div>
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {columns.map(([title, items]) => (
          <section key={title as string} className="rounded-2xl bg-[#ecebf2] p-3">
            <p className="px-2 py-2 text-sm font-medium">
              {title as string}{" "}
              <span className="text-[#716d82]">{(items as typeof tasks).length}</span>
            </p>
            <div className="space-y-2">
              {(items as typeof tasks).map((task) => (
                <article key={task.id} className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setDone((previous) =>
                          previous.includes(task.id)
                            ? previous.filter((id) => id !== task.id)
                            : [...previous, task.id],
                        )
                      }
                      className={`mt-1 size-4 rounded-full border ${done.includes(task.id) ? "border-emerald-500 bg-emerald-500" : "border-[#b9b5c4]"}`}
                    />
                    <div>
                      <p
                        className={`text-sm font-medium ${done.includes(task.id) ? "text-[#9b98a6] line-through" : ""}`}
                      >
                        {task.title}
                      </p>
                      <p className="mt-2 text-xs text-[#716d82]">
                        {task.id} · {task.project}
                      </p>
                      <div className="mt-4 flex justify-between text-xs">
                        <span className="rounded-full bg-violet-50 px-2 py-1 text-violet-800">
                          {task.priority}
                        </span>
                        <span className="text-[#716d82]">{task.due}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
