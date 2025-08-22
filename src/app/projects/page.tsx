import { Metadata } from "next";
import ProjectsPage from "@/components/AllProjects";

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'Explore Gideon Ashiru\'s software development projects including web applications, coding challenges, and technical solutions built with modern technologies.',
  keywords: 'software projects, web development, coding portfolio, programming projects, Gideon Ashiru projects, React projects, Next.js applications',
  openGraph: {
    title: 'Software Development Projects - Gideon Ashiru',
    description: 'Discover my latest software development projects showcasing web applications, technical solutions, and coding expertise.',
    url: 'https://gideonashiru.dev/projects',
  
  },
  twitter: {
    title: 'Software Development Projects - Gideon Ashiru',
    description: 'Discover my latest software development projects and technical solutions.',
  },
  other: {
    'application-name': 'Gideon Ashiru Projects Portfolio',
  },
}

export default function Page() {
  return <ProjectsPage />;
}
