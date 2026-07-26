import { DataPage } from "@/components/operations/data-page";
const rows = [
  {
    id: "SUP-31",
    subject: "Campaign page needs a small copy update",
    client: "Northstar Properties",
    priority: "MEDIUM",
    status: "OPEN",
    age: "2h",
  },
  {
    id: "SUP-30",
    subject: "Invoice payment confirmation",
    client: "Meridian Group",
    priority: "LOW",
    status: "IN PROGRESS",
    age: "6h",
  },
  {
    id: "SUP-29",
    subject: "Admin access request",
    client: "Field Notes Inc.",
    priority: "HIGH",
    status: "OPEN",
    age: "1d",
  },
];
export default function SupportPage() {
  return (
    <DataPage
      eyebrow="CLIENT CARE / SUPPORT"
      title="Keep every promise visible"
      description="Client requests, internal notes, response commitments, and resolution history."
      primaryAction="New ticket"
      columns={[
        { key: "id", label: "Ticket" },
        { key: "subject", label: "Subject" },
        { key: "client", label: "Client" },
        { key: "priority", label: "Priority" },
        { key: "status", label: "Status" },
        { key: "age", label: "Age" },
      ]}
      rows={rows}
    />
  );
}
