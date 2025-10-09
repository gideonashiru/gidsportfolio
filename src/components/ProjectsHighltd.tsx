import { Spotlight } from "lucide-react";
import { SingleProject } from "./SingleProject";
import { examit, rsvphub } from "@/constants/projects";

export default function HighLtdProjects() {
  return (
  <div
      id="projects"
      className="mt-40 p-4 sm:p-6 lg:p-8 relative"
    >
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold p-4 text-foreground flex justify-center items-center flex-wrap gap-2"> 
        <Spotlight className="w-15 h-15"/> 
        <span>PROJECTS</span>
        <a href="/projects" className="underline text-primary animate-bounce">see all here</a>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-7xl mx-auto">
        {/* First project - takes 2 cols on lg, full width on smaller */}
        <div className="md:col-span-2 lg:col-span-2 lg:col-start-2 p-3">
          <SingleProject {...rsvphub} />
        </div>
        
        {/* Second project - takes 2 cols on lg, full width on smaller */}
        <div className="md:col-span-2 lg:col-span-2 lg:col-start-1 p-3">
          <SingleProject {...examit} />
        </div>
      </div>
    </div>
  );
}
