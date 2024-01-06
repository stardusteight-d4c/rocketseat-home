import { SolutionCard } from "./components/SolutionCard"
import { useSolution } from "./hooks"

interface SolutionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Solution: React.FC<SolutionProps> = ({
  className,
  ...props
}: SolutionProps) => {
  const { solutionCardData } = useSolution()

  return (
    <section className={"bg-dark-str relative " + className} {...props}>
      <img
        src="/image/content-section-bg.webp"
        alt="solution_background/png"
        className="w-screen absolute inset-x-0 h-[30vh] lg:h-[75vh] object-fill lg:object-cover border-t border-t-gray-600/[0.50]"
      />
      <div className="absolute px-3 lg:px-0 top-[80px] left-1/2 -translate-x-1/2 z-50 w-screen">
        <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit lg:mx-auto">
          <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            SOLUÇÃO COMPLETA_
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-medium lg:text-center lg:mx-auto leading-[40px] max-w-[612px] mt-6 w-full text-white">
          Chega de comprar cursos! Aqui você encontra tudo que precisa pra
          crescer na carreira em programação
        </h2>
        <span className="text-neutral text-xl max-w-[530px] w-full block mt-6 lg:text-center lg:mx-auto leading-[28px]">
          Veja todos os benefícios exclusivos para assinantes da Rocketseat
        </span>
        <img
          src="/svg/icons/arrow-down.svg"
          alt="arrow_down/svg"
          className="mx-auto mt-6"
        />
      </div>
      <div className="space-y-20 lg:space-y-[160px] relative z-30 pt-[555px] pb-20">
        {solutionCardData.map((item, index) => (
          <SolutionCard key={index} data={item} index={index} />
        ))}
      </div>
    </section>
  )
}
