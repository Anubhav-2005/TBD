import { DataPage } from "@/components/operations/data-page";
import { leads } from "@/config/operations";
export default function CrmPage() {
  return (
    <DataPage
      eyebrow="REVENUE / CRM"
      title="Pipeline with a pulse"
      description="See the next decision, owner, and value for every opportunity."
      primaryAction="New lead"
      columns={[
        { key: "name", label: "Company" },
        { key: "contact", label: "Contact" },
        { key: "stage", label: "Stage" },
        { key: "value", label: "Potential value" },
        { key: "owner", label: "Owner" },
        { key: "next", label: "Next follow-up" },
      ]}
      rows={leads}
    />
  );
}
