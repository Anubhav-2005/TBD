import { DataPage } from "@/components/operations/data-page";
const rows = [
  {
    content: "Homepage / Hero",
    type: "Homepage section",
    status: "PUBLISHED",
    updated: "Today, 09:40",
    owner: "AP",
  },
  {
    content: "The cost of an unclear homepage",
    type: "Article",
    status: "DRAFT",
    updated: "Yesterday",
    owner: "SM",
  },
  {
    content: "Meridian Health",
    type: "Case study",
    status: "PUBLISHED",
    updated: "18 Jul",
    owner: "RJ",
  },
  { content: "Conversion FAQ", type: "FAQ", status: "PUBLISHED", updated: "16 Jul", owner: "AP" },
];
export default function CmsPage() {
  return (
    <DataPage
      eyebrow="CONTENT / CMS"
      title="The story system"
      description="Edit site content, portfolio, FAQs, proof, and conversion surfaces without touching code."
      primaryAction="Create content"
      columns={[
        { key: "content", label: "Content" },
        { key: "type", label: "Type" },
        { key: "status", label: "Status" },
        { key: "owner", label: "Owner" },
        { key: "updated", label: "Updated" },
      ]}
      rows={rows}
    />
  );
}
