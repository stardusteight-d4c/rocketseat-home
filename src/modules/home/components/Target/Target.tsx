import Image from "next/image"

import workGroup from "@/public/assets/work-group.png"
import arrowRight from "@/public/assets/icons/arrow-right.svg"

import { Button } from "@/shared/components/atoms/ui/Button"

import { Purpose } from "./components/Purpose"
import { useTarget } from "./hooks/useTarget"
import { TargetCheck } from "./components/TargetCheck/TargetCheck"

interface TargetProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Target: React.FC<TargetProps> = ({
  className,
  ...props
}: TargetProps) => {
  const { purposeData, targetData } = useTarget()

  return (
    <section
      className={
        "bg-dark-str flex-col px-3 lg:px-0 relative max-w-[100vw] py-20 flex items-center justify-center  " +
        className
      }
      {...props}
    >
      <div className="h-[80px] bg-gradient-to-t from-dark-str to-dark-mid absolute inset-x-0 -top-[50px]" />
      <div className="bg-dark-mid max-w-[1230px] w-full flex flex-col rounded-lg p-5 lg:p-[60px] border border-gray-600/[0.50]">
        <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit mx-auto">
          <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            PARA QUEM É?_
          </span>
        </div>
        <h3 className="text-white text-3xl lg:text-4xl mb-[60px] text-center font-bold leading-[40px] mt-5">
          Independente do seu nível a Rocketseat é para você
        </h3>
        <div className="flex items-center flex-col lg:flex-row justify-between">
          <div className="flex flex-col max-w-[414px] w-full">
            {purposeData.map((item, index) => (
              <Purpose
                key={index}
                data={item}
                totalItems={purposeData.length}
                position={index + 1}
              />
            ))}
          </div>
          <img
            src={workGroup.src}
            alt="work_group/png"
            className="w-full lg:w-[533px] lg:h-[419px] mt-[60px] lg:mt-0 lg:object-cover"
          />
        </div>
        <div className="w-full h-[42px] mt-[60px] mb-8 relative">
          <div className="border-t z-10 h-[0px] inset-x-0 absolute top-1/2 -translate-y-1/2 w-full border-t-gray-600/[0.50] mb-7" />
          <div className="absolute bg-dark-mid h-4 w-[260px] z-20 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2" />
          <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 z-30 absolute backdrop-blur-sm top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 rounded-lg p-2 w-fit mx-auto">
            <span className="font-bold whitespace-nowrap uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
              TAMBÉM É PARA QUEM_
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:grid-cols-4">
          {targetData.map((item, index) => (
            <TargetCheck key={index} target={item} />
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-tr from-brand-primary via-brand-primary to-brand-secondary max-w-[1230px] w-full mt-20 rounded-lg flex flex-col lg:flex-row justify-between p-5 lg:p-10">
        <h2 className="font-bold lg:max-w-[378px] tracking-wide text-center lg:text-start w-full text-xl lg:text-2xl lg:leading-[36px] text-white">
          Transforme sua carreira em programação na Rocketseat
        </h2>
        <div className="flex items-center flex-col lg:flex-row mt-6 lg:mt-0 gap-6">
          <Image src={arrowRight} alt="arrow_right/svg" className="rotate-90 lg:rotate-0" />
          <Button className="!w-full lg:!w-fit !py-4 !bg-white text-sm hover:brightness-110 tracking-normal border !border-white !text-brand-primary uppercase font-bold backdrop-blur-sm">
            <span className="uppercase">COMECE A ESTUDAR AGORA</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
