import { Metadata } from "next";
import ProjectsModule from "@/modules/projects";

export const metadata: Metadata = {
    title: "NA PROJECTS",
    description: "Projects of principle Frontend engineer"
};
export default function Projects() {
    return <ProjectsModule />;
}
