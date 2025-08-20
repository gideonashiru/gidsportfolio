import React, { JSX } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ResumeProps {
  pdfUrl: string;
  title?: string;
}

export default function Resume({
  pdfUrl,
  title = "PDF Document",
}: ResumeProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between mb-4 p-5 sm:p-10 gap-3">
        <Link href="/">
          <Button className="cursor-pointer hover:tracking-wider sm:w-auto">
            Go back home
          </Button>
        </Link>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button className="cursor-pointer hover:tracking-wider sm:w-auto">
            Open in New Tab
          </Button>
        </a>
      </div>

      {/* Resume Viewer */}
      <div className="w-full min-h-screen rounded-lg overflow-hidden p-4 sm:p-10">
        <iframe
          src={pdfUrl}
          title={title}
          className="w-full min-h-[80vh] sm:h-[90vh] border rounded-xl"
        />
      </div>
    </>
  );
}
