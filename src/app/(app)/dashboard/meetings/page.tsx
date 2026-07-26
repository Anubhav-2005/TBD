import { DataPage } from "@/components/operations/data-page";
const rows = [
  {
    title: "Meridian sprint review",
    when: "Today, 10:30–11:15",
    attendees: "6",
    status: "UPCOMING",
    agenda: "Release readiness",
  },
  {
    title: "Aster proposal review",
    when: "Today, 16:30–17:15",
    attendees: "3",
    status: "UPCOMING",
    agenda: "Commercial scope",
  },
  {
    title: "Northstar design crit",
    when: "24 Jul, 14:00",
    attendees: "5",
    status: "UPCOMING",
    agenda: "Direction selection",
  },
];
export default function MeetingsPage() {
  return (
    <DataPage
      eyebrow="OPERATIONS / MEETINGS"
      title="Meetings worth having"
      description="Agenda-led conversations, action items, and a dependable meeting history."
      primaryAction="Schedule meeting"
      columns={[
        { key: "title", label: "Meeting" },
        { key: "when", label: "When" },
        { key: "attendees", label: "People" },
        { key: "agenda", label: "Agenda" },
        { key: "status", label: "Status" },
      ]}
      rows={rows}
    />
  );
}
