"use client";
import { SingleProject } from "@/components/SingleProject";
//projects
import { examit, rsvphub } from "@/constants/projects";
import React, { useState } from "react";
import { Calendar, Code, Filter } from "lucide-react";

const projectsData = [rsvphub, examit];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  // Keep adding or removing more in future
  const uniqueTechs = [
    "React",
    "Next.js",
    "Supabase",
    "Android Studio",
    "Java",
    "Mobile",
  ];
  const categories = ["All", ...uniqueTechs];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.techStack.includes(filter));
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-card shadow-sm border-b border-border">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r mb-3 sm:mb-4 font-bold">
                MY PROJECTS
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Practice makes perfect?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  Last updated: August 2025
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                  {projectsData.length} Projects
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Filter */}
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-card border border-border rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-ring focus:border-transparent text-foreground text-sm sm:text-base min-w-0 flex-1 sm:flex-initial"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Projects Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-6">
            {filter !== "All" && `• ${filter}`}
          </h2>
          <div className="text-xs sm:text-sm text-muted-foreground">
            {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="transform hover:scale-[1.02] transition-transform duration-300"
            >
              <SingleProject {...project} disabled={true} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No projects found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filter to see more projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
