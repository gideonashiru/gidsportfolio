"use client";
import { File, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import About from "@/components/About";
import HighLtdProjects from "@/components/ProjectsHighltd";
import Contact from "@/components/Contact";

export default function HomeComponent() {
  return (
    <>      {/* Hero Section */}
      <header className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-1 sm:p-20">
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-muted-foreground">
          HELLO, I&apos;M GIDEON ASHIRU
        </h1>

        <div className="grid grid-cols-1 text-center max-w-2xl text-muted-foreground">
          <p className="mb-4">
            I&apos;m a student software developer at the University of Manitoba
            with a passion for coding. This portfolio showcases my recent work
            and practical experience with projects.
          </p>
          <p className="mb-4">
            Feel free to explore my projects and get in touch if you&apos;d like
            to collaborate!
          </p>

          <nav className="p-4 flex justify-around" aria-label="Main navigation">
            <a href="#projects" className="z-1" aria-label="View my software development projects">
              <Button
                variant="default"
                className="w-fit mx-auto hover:bg-accent cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset animate-bounce"
              >
                <MoveDown className="mr-2" aria-hidden="true" />
                View Projects
              </Button>
            </a>

            <a href="/resume" className="z-1" aria-label="Download my resume PDF">
              <Button
                variant="default"
                className="w-fit mx-auto bg-secondary text-secondary-foreground hover:bg-accent cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset animate-bounce"
              >
                <File className="mr-2" aria-hidden="true" />
                Get Resume
              </Button>
            </a>
          </nav>
        </div>
        <BackgroundBeams />
      </header>

      {/* About Section */}
      <section id="about" aria-labelledby="about-heading">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" aria-labelledby="projects-heading">
        <HighLtdProjects />
      </section>

      {/* Contact Section */}
      <section id="contact" aria-labelledby="contact-heading">
        <Contact />
      </section>
    </>
  );
}