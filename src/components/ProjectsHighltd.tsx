import { Spotlight } from "lucide-react";
import { SingleProject } from "./SingleProject";
import { examit, rsvphub } from "@/constants/projects";

export default function HighLtdProjects() {
  return (
    <div
      id="projects"
      className="grid grid-cols-3 mt-40 p-4 sm:p-6 lg:p-8 relative gap-4"
    >
      <h1 className="md:text-3xl lg:text-5xl font-bold p-4 text-foreground col-span-full justify-center flex items-center"> 
        <Spotlight className=" w-15 h-15 mr-2"/> PROJECTS <a href="/projects" className="underline text-primary ml-2 animate-bounce">see all here</a>
      </h1>

      <div className="col-span-2 col-start-2 p-3">   <SingleProject {...rsvphub} />  </div>
      <div className="col-span-2 col-start-1 p-3">   <SingleProject {...examit} />   </div>
       
     
 
    </div>
  );
}
