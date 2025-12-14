import { UserRoundPen } from "lucide-react";
import InfiniteMovingLogos from "./Moving-Logos";

export default function About() {
  return (
    <div
      id="about"
      className="grid grid-cols-1 lg:grid-cols-3 mt-40 p-4 sm:p-8 lg:p-20 bg-background relative gap-8"
    >
      {/* Tech i know and ive used */}

      <div className="row-span-full col-span-2 ">
        <h1 className="text-3xl font-bold p-4 text-foreground">
          What I know and have used
        </h1>

        <InfiniteMovingLogos />
      </div>

      {/* About me */}
      <div className="flex flex-col col-span-1 gap-4 ">
        {/* Top row: icon + heading */}
        <div className="flex items-center gap-4">
          <UserRoundPen className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0" />
          <h1 className="lg:text-3xl sm:text-xl font-bold">about me</h1>
        </div>

        {/* Paragraph below */}
        <p className="lg:text-xl sm:text-sm text-foreground max-w-2xl leading-relaxed text-justify">
          I’m a student primarily and aspiring software developer with
          interests in building creative and impactful solutions with code.
          My practical experience spans across web and mobile app development using Java,
          TypeScript, React, NextJS and more. I enjoy working with a variety of
          programming languages, mostly java but I&apos;m constantly seeking opportunities to learn new
          technologies and take on projects that challenge me. Feel free to explore this mini display of
          my journey and contact me for collaborations or opportunities!
        </p>
      </div>
    </div>
  );
}
