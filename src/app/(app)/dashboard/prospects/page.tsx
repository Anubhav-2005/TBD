import { DataPage } from "@/components/operations/data-page";
const rows = [
  {
    company: "Banana Leaf Kitchen",
    industry: "Restaurants",
    location: "Bengaluru",
    status: "Researching",
    owner: "AP",
    followUp: "24 Jul",
  },
  {
    company: "Serene Care Clinics",
    industry: "Healthcare",
    location: "Pune",
    status: "Ready to contact",
    owner: "SM",
    followUp: "Today",
  },
  {
    company: "Pace Athletics",
    industry: "Fitness",
    location: "Mumbai",
    status: "In outreach",
    owner: "RJ",
    followUp: "25 Jul",
  },
];
export default function ProspectsPage() {
  return (
    <DataPage
      eyebrow="GROWTH / PROSPECTS"
      title="Prospecting workspace"
      description="Organize compliant, public-source research and deliberate outreach."
      primaryAction="Import CSV"
      columns={[
        { key: "company", label: "Company" },
        { key: "industry", label: "Industry" },
        { key: "location", label: "Location" },
        { key: "status", label: "Outreach status" },
        { key: "owner", label: "Owner" },
        { key: "followUp", label: "Follow-up" },
      ]}
      rows={rows}
    />
  );
}
