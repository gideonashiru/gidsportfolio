import React, { JSX } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ResumeProps {
  pdfUrl: string;
  title?: string;
}

export default function Resume({ pdfUrl, title = "PDF Document" }: ResumeProps): JSX.Element {
  return (
    <> 
    <div className="flex items-center mb-4 p-10 sm:p-5 relative">
      <Link href="/">
        <Button className="cursor-pointer hover:tracking-wider">
          Go back home
        </Button>
      </Link>
      
      <h1 className="text-4xl font-bold absolute left-1/2 transform -translate-x-1/2">my resume</h1>
    </div>
    
    <div className="w-full h-screen rounded-lg overflow-hidden p-20">
      <iframe
        src={pdfUrl}
        title={title}
        className="w-full h-full border rounded-xl"
       
      />
    </div>
    </>
  );
}