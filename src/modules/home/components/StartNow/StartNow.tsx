import Image from "next/image"

import startNowBg from "@/public/assets/start-now-bg.svg"
import startNow from "@/public/assets/start-now.svg"

import { Button } from "@/shared/components/atoms/ui/Button"

interface StartNowProps extends React.HTMLAttributes<HTMLDivElement> {}

export const StartNow: React.FC<StartNowProps> = ({
  className,
  ...props
}: StartNowProps) => {
  return (
    <section
      className={"bg-gradient-rocketseat py-20 relative " + className}
      {...props}
    >
      <img
        src={startNowBg.src}
        alt="start_now_bg/svg"
        className="absolute z-0 inset-x-0 bottom-0 pointer-events-none"
      />
      <img
        src={startNow.src}
        alt="start_now/svg"
        className="absolute z-0 left-1/2 -translate-x-1/2 -top-[160px]"
      />
      <div className="relative px-3 lg:px-0 z-30">
        <h2 className="text-center text-white text-4xl font-bold leading-[40px]">
          Comece agora sua jornada em programação
        </h2>
        <span className="text-center block text-[#E1E1E6] mt-4">
          Acelere para o seu próximo nível de carreira e nunca pare de aprender
        </span>
        <div className="mt-10 flex items-center flex-col lg:flex-row gap-6 justify-center">
          <Button className="!w-full lg:!w-fit !py-4 !bg-white text-sm hover:brightness-110 tracking-normal border !border-white !text-brand-primary uppercase font-bold backdrop-blur-sm">
            <span className="uppercase">Embarque agora</span>
          </Button>
          <div className="flex items-center group cursor-pointer gap-x-2 text-white uppercase font-bold">
            <img src='/svg/icons/whatsapp.svg' alt="whatsapp/svg" />
            <div className="flex flex-col gap-y-[2px]">
              <span className="block text-[10px] group-hover:underline">
                Tem alguma dúvida?
              </span>
              <span className="block text-sm group-hover:underline">
                fale com nosso time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
