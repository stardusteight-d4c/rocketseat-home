"use client"

import { useState } from "react"

import { Button } from "@/shared/components/atoms/ui/Button"

interface VideoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Video: React.FC<VideoProps> = ({
  className,
  ...props
}: VideoProps) => {
  const [play, setPlay] = useState<boolean>(false)

  return (
    <section
      className={
        "bg-gradient-to-b from-brand-primary via-brand-primary to-brand-secondary relative h-[175px] md:h-[200px] lg:h-[458px] max-w-[100vw] " +
        className
      }
      {...props}
    >
      <div className="relative mx-3 lg:mx-0 h-[175px] md:h-[200px] lg:h-[458px] max-w-[100vw]">
        <div className="absolute lg:-mt-[214px] bottom-0 z-[50] left-1/2 border-[8px] !border-b-0 lg:border-[10px] max-w-full lg:max-w-[1230px] w-full overflow-y-hidden h-[200px] xxs:h-[250px] xs:h-[300px] md:h-[400px] lg:h-[690px] -translate-x-1/2 bg-dark-str border-dark-str rounded-b-none rounded-lg mx-auto">
          <div className="relative">
            {!play && (
              <>
                <img
                  src="/image/rocket-showcase.png"
                  alt="rocket_showcase"
                  className="brightness-75 w-full lg:rounded-t-lg h-[200px] xxs:h-[250px] xs:h-[300px] md:h-[400px] lg:h-[682px]"
                />
                <div
                  onClick={() => setPlay(true)}
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white"
                >
                  <Button
                    type="play"
                    title="Aperte o play e conheça a Rocketseat"
                  />
                </div>
              </>
            )}
            {play && (
              <video
                autoPlay
                controls
                src="/rocketseat-showcase.mp4"
                className="min-w-full min-h-full lg:rounded-t-lg h-[200px] xxs:h-[250px] xs:h-[300px] md:h-[400px] lg:h-[682px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
