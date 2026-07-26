import { DataPage } from "@/components/operations/data-page";
import { projects } from "@/config/operations";
export default function ProjectsPage() {
  return (
    <DataPage
      eyebrow="DELIVERY / PROJECTS"
      title="Project portfolio"
      description="Every project, its pace, budget health, and next delivery milestone."
      primaryAction="New project"
      columns={[
        { key: "name", label: "Project" },
        { key: "client", label: "Client" },
        { key: "phase", label: "Phase" },
        { key: "progress", label: "Progress" },
        { key: "due", label: "Next milestone" },
      ]}
      rows={projects}
    />
  );
}
