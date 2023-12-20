import Image from "next/image"
import heroBackground from "@/shared/assets/hero-background.svg"
import whatsapp from "@/shared/assets/icons/whatsapp.svg"
import { Button } from "@/shared/components/atoms/ui/Button"
import { ArrowRight } from "@/shared/components/atoms/icons"

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
        <div>
          <div className="bg-black/60 mt-7 flex items-center backdrop-blur-sm rounded-lg p-6 border border-gray-600/[0.50] w-fit mx-auto">
            <Button className="!w-fit !py-4 text-sm hover:brightness-110 tracking-normal border text-white !border-brand-primary bg-brand-primary uppercase font-bold backdrop-blur-sm">
              <span className="text-white uppercase">Quero assinar agora</span>
              <ArrowRight className="-mb-[3px]" />
            </Button>
            <div className="border-l h-[55px] w-0 border-l-gray-600/[0.50] mx-6" />
            <div className="flex items-center group cursor-pointer gap-x-2 text-white uppercase font-bold">
              <Image src={whatsapp} alt="whatsapp/svg" />
              <div className="flex flex-col gap-y-[2px]">
                <span className="block text-[10px] group-hover:underline">Tem alguma dúvida?</span>
                <span className="block text-sm group-hover:underline">fale com nosso time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}