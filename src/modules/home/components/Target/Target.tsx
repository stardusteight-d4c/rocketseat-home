import Image from "next/image"

import workGroup from "@/public/assets/work-group.png"

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
    <div
      className={
        "bg-dark-str relative max-w-[100vw] py-20 flex items-center justify-center  " +
        className
      }
      {...props}
    >
      <div className="h-[80px] bg-gradient-to-t from-dark-str to-dark-mid absolute inset-x-0 -top-[70px]" />
      <div className="bg-dark-mid max-w-[1230px] w-full flex flex-col rounded-lg p-[60px] border border-gray-600/[0.50]">
        <div className="bg-dark-str backdrop-blur-sm rounded-lg p-2 border border-gray-600/[0.50] w-fit mx-auto">
          <span className="font-bold uppercase bg-gradient-to-br text-transparent from-white via-white/50 to-transparent bg-clip-text">
            PARA QUEM É?
          </span>
        </div>
        <h3 className="text-white text-4xl mb-[60px] text-center font-bold leading-[40px] mt-5">
          Independente do seu nível a Rocketseat é para você
        </h3>
        <div className="flex items-center justify-between">
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
          <Image
            src={workGroup}
            width={533}
            height={419}
            quality={100}
            alt="work_group/png"
            className="w-[533px] h-[419px] object-cover"
          />
        </div>
        <div className="w-full h-[42px] mt-[60px] mb-8 relative">
          <div className="border-t z-10 h-[0px] inset-x-0 absolute top-1/2 -translate-y-1/2 w-full border-t-gray-600/[0.50] mb-7" />
          <div className="absolute bg-dark-mid h-4 w-[260px] z-20 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2" />
          <div className="bg-dark-str z-30 absolute backdrop-blur-sm top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 rounded-lg p-2 border border-gray-600/[0.50] w-fit mx-auto">
            <span className="font-bold uppercase bg-gradient-to-br text-transparent from-white via-white/50 to-transparent bg-clip-text">
              TAMBÉM É PARA QUEM
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {targetData.map((item, index) => (
            <TargetCheck key={index} target={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
