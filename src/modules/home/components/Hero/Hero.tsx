import Image from "next/image"
import heroBackground from "@/shared/assets/hero-background.svg"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero: React.FC<HeroProps> = ({ ...props }: HeroProps) => {
  return (
    <div {...props}>
      <Image
        src={heroBackground}
        alt="background_hero/svg"
        className="w-screen object-cover"
      />
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2">
        
      </div>
    </div>
  )
}
