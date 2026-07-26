import { DataPage } from "@/components/operations/data-page";
const rows = [
  {
    name: "Meridian launch assets",
    type: "Folder",
    project: "Meridian Health",
    updated: "Today, 09:12",
    access: "Team",
  },
  {
    name: "Homepage-direction-v3.fig",
    type: "Figma",
    project: "Northstar Living",
    updated: "Yesterday",
    access: "Client review",
  },
  {
    name: "Field-notes-brief.pdf",
    type: "PDF",
    project: "Field Notes",
    updated: "20 Jul",
    access: "Team",
  },
];
export default function FilesPage() {
  return (
    <DataPage
      eyebrow="ASSETS / FILES"
      title="A calmer file cabinet"
      description="Project assets, deliverables, and share-ready client materials in one secure place."
      primaryAction="Upload files"
      columns={[
        { key: "name", label: "Name" },
        { key: "type", label: "Type" },
        { key: "project", label: "Project" },
        { key: "access", label: "Visibility" },
        { key: "updated", label: "Last updated" },
      ]}
      rows={rows}
    />
  );
}
