import { Metadata } from "next";
import ProjectsPage from "@/components/AllProjects";

export const metadata: Metadata = {
  title: "Gideon Ashiru | Projects",
  description: "All my projects and work",
};

export default function Page() {
  return <ProjectsPage />;
}
