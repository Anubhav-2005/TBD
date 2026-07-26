import { DataPage } from "@/components/operations/data-page";
const rows = [
  {
    number: "ARC-2026-042",
    client: "Meridian Group",
    amount: "₹2,40,000",
    status: "PAID",
    due: "12 Jul",
  },
  {
    number: "ARC-2026-043",
    client: "Northstar Properties",
    amount: "₹1,85,000",
    status: "SENT",
    due: "26 Jul",
  },
  {
    number: "ARC-2026-044",
    client: "Field Notes Inc.",
    amount: "₹3,10,000",
    status: "DRAFT",
    due: "02 Aug",
  },
];
export default function InvoicesPage() {
  return (
    <DataPage
      eyebrow="FINANCE / INVOICES"
      title="Revenue, with receipts"
      description="GST-ready invoices, payment status, and a clean view of what is due."
      primaryAction="Create invoice"
      columns={[
        { key: "number", label: "Invoice" },
        { key: "client", label: "Client" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
        { key: "due", label: "Due date" },
      ]}
      rows={rows}
    />
  );
}
