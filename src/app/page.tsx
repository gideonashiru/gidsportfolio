import HomeComponent from "@/components/HomeComponent";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gideon Ashiru",
    jobTitle: "Software Developer",
    description:
      "Student software developer at University of Manitoba specializing in web development and programming projects",
    url: "https://gideonashiru.dev",
    sameAs: [
      // Add your social media profiles here
      "https://www.linkedin.com/in/gideon-ashiru-501b73327/",
      "https://github.com/gideonashiru",
    ],
    alumniOf: "University of Manitoba",
    knowsAbout: ["Software Development", "Web Development", "Programming"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeComponent />
    </>
  );
}
