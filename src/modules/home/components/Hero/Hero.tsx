import Image from "next/image"
import heroBackground from "@/shared/assets/hero-background.svg"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero: React.FC<HeroProps> = ({ ...props }: HeroProps) => {
  return (
    <div {...props} className="relative">
      <Image
        src={heroBackground}
        alt="background_hero/svg"
        className="w-screen object-cover"
      />
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-50 w-screen">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-2 border border-gray-600/[0.50] w-fit mx-auto">
          <span className="font-bold uppercase bg-gradient-to-br text-transparent from-white via-white/50 to-transparent bg-clip-text">
            HELLO WORLD_
          </span>
        </div>
        <h1 className="text-5xl font-bold text-center mx-auto leading-[48px] max-w-[1115px] mt-5 w-full text-white">
          Comece ou especialize-se em programação e{" "}
          <span className="bg-gradient-to-r text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            conquiste as melhores vagas
          </span>
        </h1>
        <span className="text-neutral text-xl max-w-[630px] w-full block mt-10 text-center mx-auto leading-[28px]">
          A plataforma completa pra você aprender programação do zero no seu
          ritmo, se tornar Full Stack e se especializar em diversas tecnologias.
        </span>
      </div>
    </div>
  )
}
