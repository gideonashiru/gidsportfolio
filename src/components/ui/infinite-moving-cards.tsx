"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote?: string
    name?: string
    title: string
    image?: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards")
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse")
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-1 sm:gap-2 md:gap-3 py-1 sm:py-2 md:py-3",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] max-w-full shrink-0 rounded-lg sm:rounded-xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.title + idx}
          >
            {item.image ? (
              // Image-based card for logos
              <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 h-full">
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                  width={1000}
                  height={1000}
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center text-neutral-800 dark:text-gray-100 leading-tight line-clamp-2">
                  {item.title}
                </span>
              </div>
            ) : (
              // Text-based card for quotes (original functionality)
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-xs sm:text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-3 sm:mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-xs sm:text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-xs sm:text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
