import asset from "@/public/assets/feedback-section-asset.png"
import arrowDown from "@/public/assets/icons/arrow-down-white.svg"

interface FeedbacksProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Feedbacks: React.FC<FeedbacksProps> = ({
  className,
  ...props
}: FeedbacksProps) => {
  return (
    <section className={"bg-dark-mid py-20 relative " + className} {...props}>
      <img
        src={asset.src}
        alt="asset/png"
        className="absolute top-0 right-0 z-0 w-[669px] h-[497px]"
      />
      <div className="max-w-[1230px] w-full mx-auto relative z-10">
        <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit">
          <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            DEPOIMENTOS DE ALUNOS E ALUNAS_
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-4xl font-bold text-white leading-[40px] mt-8 mb-[60px] w-full max-w-[670px]">
            Eles conquistaram seus objetivos de carreira e transformaram suas
            vidas
          </h3>
          <div className="flex items-center gap-x-4">
            <span className="w-[200px] block text-lg text-white/80 leading-[28px]">
              O próximo depoimento pode ser seu!
            </span>
            <img
              src={arrowDown.src}
              alt="arrow_down/svg"
              className="w-8 h-8"
            />
          </div>
        </div>
        <div>

    <div></div>
    <div></div>
    <div></div>

        </div>
      </div>
    </section>
  )
}
