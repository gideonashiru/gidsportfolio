"use client"

import { useRef, useState } from "react"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Image from "next/image"
import type { ProjectType } from "@/constants/projects"
import { Pause, Play } from "lucide-react"

/**
 * SingleProject component displays a single project card with details.
 * @param project - The project data to display
 * @param disabled - Boolean to disable 3D effects
 * @returns JSX Element representing the project card.
 */
export function SingleProject({
  disabled = false, // Added disabled prop with default false
  ...project
}: ProjectType & { disabled?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <CardContainer className="inter-var" disabled={disabled}>
      <CardBody
        className=" bg-primary/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
       dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:w-[925px] h-auto min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]
       rounded-xl p-2 sm:p-4 lg:p-6 border flex flex-col"
      >
        <CardItem translateZ="40" className="text-xl font-bold text-neutral-600 dark:text-white">
          {project.title}
        </CardItem>
        <CardItem as="p" translateZ="30" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {project.description}
        </CardItem>

        <CardItem
          as="p"
          translateZ="30"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-bold"
        >
          Tech Stack used: {project.techStack.join(", ")}
        </CardItem>

        {!project.video && (
          <CardItem translateZ="20" className="w-full mt-4">
            <Image
              width="2000"
              height="1000"
              src={project.media || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full rounded-lg group-hover/card:shadow-xl"
              priority
            />
          </CardItem>
        )}

        {project.video && (
          <CardItem translateZ="20" className="w-full mt-4 relative">
            <video
              ref={videoRef}
              src={project.media}
              height="1000"
              width="1000"
              className="sm:h-[100px] md:h-[300px] lg:h-[500px] w-full object-contain rounded-lg group-hover/card:shadow-xl"
              autoPlay
              loop
              muted
              playsInline
              onClick={togglePlayPause}
            />
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-xl"
            >
              <div className="bg-white/80 rounded-full p-3">{isPlaying ? <Pause /> : <Play />}</div>
            </button>
          </CardItem>
        )}

        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="a"
            href={project.url}
            target="__blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-l text-xs font-normal text-primary-foreground bg-primary hover:bg-accent border"
          >
            See Live Demo →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="cursor-pointer px-4 py-2 rounded-l bg-black text-xs font-bold text-primary-foreground hover:bg-secondary hover:text-secondary-foreground border"
            onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
          >
            Learn More (i.e. GitHub)
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
