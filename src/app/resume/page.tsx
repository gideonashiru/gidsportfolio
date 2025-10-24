import Resume from "@/components/Resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Download or view Gideon Ashiru\'s resume. Software developer with experience in web development, programming, and technical projects at University of Manitoba.',
  keywords: 'resume, CV, software developer resume, Gideon Ashiru resume, University of Manitoba, developer CV, programming experience',
  openGraph: {
    title: 'Gideon Ashiru - Resume & CV',
    description: 'Download or view my resume showcasing software development skills, education, and project experience.',
    
    // images: ['https://gideonashiru.dev/resumepreview.jpg'], dont have one yet (place in public)
  },
  twitter: {
    title: 'Gideon Ashiru - Resume & CV',
    description: 'Download or view my resume showcasing software development skills and experience.',
  },
 
  other: {
    'application-name': 'Gideon Ashiru Resume',
    'format-detection': 'telephone=no', // Prevents phone number auto-detection
  },
}
export default function Page() {

  
  return (
    <div>
      <Resume pdfUrl={RESUME_URL} />

      
    </div>
  );
}

const RESUME_URL =
  "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL3Jlc3VtZS5wZGYiLCJpYXQiOjE3NjEzMTQ5NDIsImV4cCI6MjEwODIxMDk0Mn0.u59U8Ecra61_eWhYQ3XAvaumWMj7hLPAqQa4GMhtcvs";

  