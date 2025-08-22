import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/components/Navbar";
import { ScrollingNavbar } from "@/components/ScrollingNavbar";

export const metadata: Metadata = {
  title: 'Gideon Ashiru - Software Developer | University of Manitoba Student',
  description: 'Software developer and University of Manitoba student showcasing web development projects, coding experience, and technical skills. View my portfolio and get in touch for collaboration.',
  keywords: 'software developer, web developer, University of Manitoba, student developer, portfolio, coding projects, programming',
  authors: [{ name: 'Gideon Ashiru' }],
  openGraph: {
    title: 'Gideon Ashiru - Software Developer Portfolio',
    description: 'University of Manitoba software development student showcasing projects and coding experience.',
    url: 'https://gideonashiru.dev',
    siteName: 'Gideon Ashiru Portfolio',
    images: [
      {
        url: 'https://gideonashiru.dev/GIDEON_ASHIRU.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gideon Ashiru - Software Developer Portfolio',
    description: 'University of Manitoba software development student showcasing projects and coding experience.',
    images: ['https://gideonashiru.dev/GIDEON_ASHIRU.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
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
         <SpeedInsights />

        {/* Footer */}
        <footer className=" grid grid-rows items-center justify-items-center text-xl text-card-foreground/70 p-8 mt-4 sm:p-15">
          &copy; {new Date().getFullYear()} Gideon. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
