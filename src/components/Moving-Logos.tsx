"use client"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export default function InfiniteMovingLogos() {
  return (
    <div className="h-[8rem] sm:h-[12rem] md:h-[20rem] lg:h-[30rem] xl:h-[40rem] rounded-md flex flex-col antialiased dark:bg-background items-center justify-center relative overflow-hidden px-1 sm:px-2 md:px-4 lg:px-6">
      <InfiniteMovingCards
        items={imageCardsTop}
        direction="right"
        speed="fast"
        className="mb-1 sm:mb-2 md:mb-3 lg:mb-4 p-1 sm:p-2"
      />
      <InfiniteMovingCards
        items={imageCardsMiddle}
        direction="left"
        speed="normal"
        className="mb-1 sm:mb-2 md:mb-3 lg:mb-4"
      />
      <InfiniteMovingCards
        items={imageCardsBottom}
        direction="right"
        speed="fast"
        className="mb-1 sm:mb-2 md:mb-3 lg:mb-4"
      />
    </div>
  )
}

const imageCardsTop = [
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/HTML5_Badge_512.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL0hUTUw1X0JhZGdlXzUxMi5wbmciLCJpYXQiOjE3NTUwNTUxNTksImV4cCI6MjA3MDQxNTE1OX0.kIZdRdJIzm9TKMC0JLp6S_Y1-1NRi4jBKh32T6vK0xU",
    title: "HTML & CSS",
  },
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/tailwind-css-1.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL3RhaWx3aW5kLWNzcy0xLnN2ZyIsImlhdCI6MTc1NTA1NTE4MiwiZXhwIjoyMDcwNDE1MTgyfQ.rNZfkIDQoCPlinDfqk6Yw-R71AATnQUEKdRp76DletI",
    title: "TailwindCSS",
  },
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/react_original_wordmark_logo_icon_146375.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL3JlYWN0X29yaWdpbmFsX3dvcmRtYXJrX2xvZ29faWNvbl8xNDYzNzUucG5nIiwiaWF0IjoxNzU1MDU1MjAwLCJleHAiOjIwNzA0MTUyMDB9.NJSEBRksx_SU7KCbgff-zSFn8K8hVyCORB1gfSdpQ6c",
    title: "React",
  },
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/dango-inner-2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL2RhbmdvLWlubmVyLTIud2VicCIsImlhdCI6MTc1NTA1NTIxNiwiZXhwIjoyMDcwNDE1MjE2fQ.FqJg3TPkR4ZlITMeWYkAFH2e09PrY6NXU338XPDHbAA",
    title: "Next.js",
  },
]

const imageCardsMiddle = [
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/javascript_and_typescript-1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL2phdmFzY3JpcHRfYW5kX3R5cGVzY3JpcHQtMS53ZWJwIiwiaWF0IjoxNzU1MDU1MzM1LCJleHAiOjIwNzA0MTUzMzV9.kycbl8PYPszAZG-QkyNJTD3DEUg4ruiPsjdauslq41A",
    title: "JavaScript/TypeScript",
  },
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/java.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL2phdmEuc3ZnIiwiaWF0IjoxNzU1MzkxNjc0LCJleHAiOjIxMDIyODc2NzR9.Kh45Jquv0i9n0hmAaQK63USpGmFNg5HorDWA0Dz8utU",
    title: "Java",
  },
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/C.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL0MucG5nIiwiaWF0IjoxNzU1MDU1Mzc2LCJleHAiOjIwNzA0MTUzNzZ9.uxegDdnow2Qm5H8UFmtwC-BsEeZNuVWRYGNUSnfgUnU",
    title: "C/C++",
  },
]
const imageCardsBottom = [
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/supabse%20(1).webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL3N1cGFic2UgKDEpLndlYnAiLCJpYXQiOjE3NTUzOTE3NzIsImV4cCI6MjEwMjI4Nzc3Mn0.L0aARo6Y0LvT1r-GrfAJ-rVGB36ErXJJ-v1Br4mJuSk",
    title: "Supabase",
  },
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/github.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL2dpdGh1Yi5qcGciLCJpYXQiOjE3NTUwNTU0MDMsImV4cCI6MjEwMTk1MTQwM30.FfG98kqxU8dMQ6bL0UtG8YlIUqmv8CG5oQaCUux3X9Q",
    title: "Git, GitHub",
  },
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/android-studio-icon.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL2FuZHJvaWQtc3R1ZGlvLWljb24ud2VicCIsImlhdCI6MTc1NTA1NTQzNiwiZXhwIjoyMTAxOTUxNDM2fQ.hPOMFE0j9m2orbSg3zXYJonchj4tR9yYPeLBkspsQ48",
    title: "Android Studio",
  },

  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/sql.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL3NxbC5wbmciLCJpYXQiOjE3NTUwNTU0NDgsImV4cCI6MjEwMTk1MTQ0OH0.-e3ik6L2WBItLEQFn5BrhhqHbGr9BZU17Qg9IiCHatE",
    title: "MySql, PostgreSQL",
  },
  {
    image:
      "https://hfeexkyhshegrpuvvesj.supabase.co/storage/v1/object/sign/private/vercel.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNjBlZTZmYS1hZDYxLTQwZGEtOTA0ZC1mMzU4NjRiMzI2NzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcml2YXRlL3ZlcmNlbC53ZWJwIiwiaWF0IjoxNzU1MDU1NDYwLCJleHAiOjIxMDE5NTE0NjB9.kuQZIV_R9X93EDZv3o_J24B8qj3SvC3sTa7Xc8TlVKA",
    title: "Vercel",
  },
]
