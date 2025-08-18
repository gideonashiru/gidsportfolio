export interface ProjectType {
  title: string;
  description: string;
  media: string;
  url: string;
  techStack: string[];
  github: string;
  features: string[];
  futurePlans: string[];
  video: boolean;
}

export const rsvphub: ProjectType = {
  title: "rsvphub",
  description:
    "A platform to manage RSVPs for events, allowing users to create, share, and track event invitations seamlessly.",
  media:
    "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/rsvp1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL3JzdnAxLnBuZyIsImlhdCI6MTc1NTIxNzc4NCwiZXhwIjoyMTAyMTEzNzg0fQ.Qcx2lYHvx8imevX4XTQrQpFwP72XEJAdJATjEk31aFA",
  url: "https://rsvphub.vercel.app",
  techStack: [
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Supabase",
    "ShadCN UI",
  ],
  github: "https://github.com/gideonashiru/rsvphub",
  features: [
    "Create and manage events",
    "Send invitations",
    "Track RSVPs",
    "User-friendly interface",
    "Responsive design",
  ],
  futurePlans: [
    "Add more customization options for events",
    "Implement user authentication",
    "Enhance the analytics dashboard for event organizers",
  ],
  video: false,
};

export const examit: ProjectType = {
  title: "Examit",
  description:
    "An Android app that helps students prepare for exams by providing a platform for them to create and share study materials. No live demo on the web, you would have to install android studio then download the project from my github to run it. Here's a demo video though: ",
  media: "/assets/demo.mp4",
  url: "",
  techStack: ["Android Studio", "Java", "Material UI", "HSQLDB",],
  github: "https://github.com/gideonashiru/examitApp",
  features: [
    "Flashcards: Create and review personalized flashcards",
    "Study Guides: Combine notes, flashcards, and resources",
    "Mock Tests: Practice with exam-like questions",
    "Performance Tracking: View your performance through rating",
    "Gamified XP: Earn experience points",
    "Custom Material: Author and organize study content by tags",
  ],
  futurePlans: ["Its completed!"],
  video: true,
};
