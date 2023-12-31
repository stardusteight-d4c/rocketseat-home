import Image from "next/image"
import rocketShowcase from "@/public/rocket-showcase.png"
import { Button } from "@/shared/components/atoms/ui/Button"

interface VideoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Video: React.FC<VideoProps> = ({
  className,
  ...props
}: VideoProps) => {
  return (
    <section
      className={
        "bg-gradient-to-b from-brand-primary via-brand-primary to-brand-secondary relative h-[175px] lg:h-[458px] max-w-[100vw] " +
        className
      }
      {...props}
    >
      <div className="relative mx-3 lg:mx-0 h-[175px] lg:h-[458px] max-w-[100vw]">
        <div className="absolute lg:-mt-[214px] -bottom-2 lg:bottom-auto z-[50] left-1/2 border-[8px] lg:border-[10px] max-w-full lg:max-w-[1230px] w-full overflow-y-hidden h-[200px] lg:h-[682px] -translate-x-1/2 border-dark-str rounded-b-none rounded-lg  mx-auto">
          <div className="relative">
            <Image
              width={1230}
              height={684}
              src={rocketShowcase}
              alt="rocket_showcase"
              className="brightness-75 h-full lg:rounded-t-lg"
            />
            <Button
              type="play"
              title="Aperte o play e conheça a Rocketseat"
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
