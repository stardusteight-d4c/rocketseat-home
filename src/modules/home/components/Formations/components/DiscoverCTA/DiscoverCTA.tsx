import { ArrowRight } from "@/shared/components/atoms/icons"
import { Button } from "@/shared/components/atoms/ui/Button"

interface DiscoverCTAProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DiscoverCTA: React.FC<DiscoverCTAProps> = ({
  className,
  ...props
}: DiscoverCTAProps) => {
  return (
    <div
      className={
        "bg-dark-str mt-10 flex flex-col lg:flex-row lg:items-center justify-between w-full p-5 lg:p-8 border border-gray-600/[0.50] rounded-lg " +
        className
      }
      {...props}
    >
      <div className="flex lg:items-center flex-col lg:flex-row gap-6">
        <img src="/svg/discover.svg" alt="discover/svg" className="w-[60px]" />
        <div className="flex flex-col gap-y-[10px]">
          <h5 className="text-white font-bold text-xl leading-[28px]">
            Aprenda programação do zero e DE GRAÇA
          </h5>
          <span className="text-neutral max-w-[445px] w-full text-sm leading-[20px]">
            No Discover você vai descomplicar a programação, aprender a criar
            seu primeiro site com a mão na massa e iniciar sua transição de
            carreira.
          </span>
        </div>
      </div>
      <Button className="!w-full lg:!w-fit !py-4 mt-6 lg:mt-0 text-sm hover:brightness-110 tracking-normal border text-white !border-brand-primary bg-brand-primary uppercase font-bold backdrop-blur-sm">
        <span className="text-white uppercase">COMECE A ESTUDAR AGORA</span>
        <ArrowRight className="-mb-[3px]" />
      </Button>
    </div>
  )
}
