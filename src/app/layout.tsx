import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";

import { Navbar } from "@/components/Navbar";
import { ScrollingNavbar } from "@/components/ScrollingNavbar";

export const metadata: Metadata = {
  title: "Gideon Ashiru | Portfolio",
  description: "A portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge("font-mono flex flex-col min-h-screen antialiased")}
      >
        <ScrollingNavbar className="z-50 bg-background border-b">
          <Navbar />
        </ScrollingNavbar>

        {children}
         <Analytics />
        {/* Footer */}
        <footer className=" grid grid-rows items-center justify-items-center text-xl text-card-foreground/70 p-8 mt-4 sm:p-15">
          &copy; {new Date().getFullYear()} Gideon. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
