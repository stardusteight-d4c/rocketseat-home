import Image from "next/image"
import rocketShowcase from "@/public/rocket-showcase.png"
import { Button } from "@/shared/components/atoms/ui/Button"

interface VideoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Video: React.FC<VideoProps> = ({
  className,
  ...props
}: VideoProps) => {
  return (
    <div
      className={
        "bg-gradient-to-b from-brand-primary via-brand-primary to-brand-secondary h-[458px] max-w-screen overflow-hidden " +
        className
      }
    >
      <div className="absolute -mt-56 z-[50] left-1/2 border-[10px] w-[1216px] overflow-hidden h-[682px] -translate-x-1/2 border-b-0 border-dark-str rounded-b-none rounded-lg  mx-auto">
        <div className="relative">
          <Image
            width={1216}
            height={684}
            src={rocketShowcase}
            alt="rocket_showcase"
            className="brightness-75 h-full rounded-t-lg"
          />
          <Button
            type="play"
            title="Aperte o play e conheça a Rocketseat"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white"
          />
        </div>
      </div>
    </div>
  )
}
