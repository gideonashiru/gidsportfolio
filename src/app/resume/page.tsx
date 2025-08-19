import Resume from "@/components/Resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gideon Ashiru | Resume",
  description: "My resume",
};

export default function Page() {
  return (
    <div>
      <Resume pdfUrl={RESUME_URL} />
    </div>
  );
}

const RESUME_URL =
  "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL3Jlc3VtZS5wZGYiLCJpYXQiOjE3NTQ5NjYyNTIsImV4cCI6MzMzMTc2NjI1Mn0.TFwlxIkB-BnQxJd9xUzwKNchdzw3JNAt4zbqPfEQZJs";
