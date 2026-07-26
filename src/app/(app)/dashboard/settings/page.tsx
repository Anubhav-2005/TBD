const sections = [
  ["Company profile", "Business identity, address, tax profile, and brand assets."],
  ["Roles & permissions", "Role-based access, workspace invitations, and permission policies."],
  [
    "Payments & tax",
    "Razorpay credentials, invoice sequencing, GST, currencies, and payment terms.",
  ],
  [
    "Email & notifications",
    "Sender profiles, templates, in-app notification rules, and delivery preferences.",
  ],
  [
    "Security & backups",
    "Session controls, audit logs, export policy, backups, and recovery status.",
  ],
];
export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="font-mono text-xs tracking-[.16em] text-violet-700">
        ADMINISTRATION / SETTINGS
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-.05em]">
        Keep the operating system yours.
      </h1>
      <p className="mt-2 text-sm text-[#716d82]">
        Configuration is organized around the few decisions that change how the agency runs.
      </p>
      <div className="mt-7 divide-y divide-[#dedde6] rounded-2xl border border-[#dedde6] bg-white">
        {sections.map(([title, description]) => (
          <button
            key={title}
            className="flex w-full items-center justify-between gap-5 p-5 text-left hover:bg-[#fafafe]"
          >
            <div>
              <p className="font-medium">{title}</p>
              <p className="mt-1 text-sm text-[#716d82]">{description}</p>
            </div>
            <span className="text-violet-700">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
