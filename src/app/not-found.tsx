import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-lg">Sorry, this page doesn’t exist.</p>

      <Link href="/">
        <Button
          variant="default"
          className="text-2xl text-white w-fit mx-auto hover:bg-accent cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset mt-4"
        >
          <Home className="mr-2" />
          Go Home
        </Button>
      </Link>
    </div>
  );
}
