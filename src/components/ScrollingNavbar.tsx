"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ScrollingNavbarProps {
  children: ReactNode;
  className?: string;
}

export const ScrollingNavbar = ({
  children,
  className = "z-50 bg-background",
}: ScrollingNavbarProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const STICKY_PAGES = ["/resume", "/projects", "/not-found"];

  // Special case for page: always sticky
  if (STICKY_PAGES.includes(pathname)) {
    return <div className="sticky top-0 z-50 bg-background border-b">{children}</div>;
  }

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const getNavbarStyle = () => {
    const viewportHeight = window.innerHeight;
    const navbarHeight = 0; // Adjust this to match your navbar height

    if (scrollY >= viewportHeight) {
      // Sticky at top once past first screen
      return {
        position: "fixed" as const,
        top: "0",
        left: "0",
        right: "0",
        transform: "translateY(0)",
      };
    } else {
      // Move up from bottom as user scrolls
      const progress = scrollY / viewportHeight;
      const translateY = (1 - progress) * (viewportHeight - navbarHeight);

      return {
        position: "fixed" as const,
        top: `${translateY}px`,
        left: "0",
        right: "0",
        transform: "translateY(0)",
      };
    }
  };

  return (
    <div className={className} style={getNavbarStyle()}>
      {children}
    </div>
  );
};
