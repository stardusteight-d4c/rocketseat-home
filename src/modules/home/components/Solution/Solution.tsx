import Image from "next/image"

import solutionBackground from "@/public/assets/content-section-bg.webp"
import arrowDown from "@/public/assets/icons/arrow-down.svg"
import { useSolution } from "./hooks"
import { SolutionCard } from "./components/SolutionCard/SolutionCard"

interface SolutionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Solution: React.FC<SolutionProps> = ({
  className,
  ...props
}: SolutionProps) => {
  const { solutionCardData } = useSolution()

  return (
    <div className={"bg-dark-str relative " + className} {...props}>
      <Image
        src={solutionBackground}
        alt="solution_background/png"
        quality={100}
        className="w-screen absolute inset-x-0 h-[75vh] object-cover border-t border-t-gray-600/[0.50]"
      />
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-50 w-screen">
        <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit mx-auto">
          <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            SOLUÇÃO COMPLETA_
          </span>
        </div>
        <h2 className="text-4xl font-medium text-center mx-auto leading-[40px] max-w-[612px] mt-6 w-full text-white">
          Chega de comprar cursos! Aqui você encontra tudo que precisa pra
          crescer na carreira em programação
        </h2>
        <span className="text-neutral text-xl max-w-[530px] w-full block mt-6 text-center mx-auto leading-[28px]">
          Veja todos os benefícios exclusivos para assinantes da Rocketseat
        </span>
        <Image src={arrowDown} alt="arrow_down/svg" className="mx-auto mt-6" />
      </div>
      <div className="space-y-[160px] relative z-30 pt-[555px]">
        {solutionCardData.map((item, index) => (
          <SolutionCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  )
}
