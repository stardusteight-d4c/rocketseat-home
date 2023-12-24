import Image from "next/image"

import rocket from "@/public/assets/rocket.png"
import vector from "@/public/assets/vector.svg"

import { Button } from "@/shared/components/atoms/ui/Button"
import { ArrowRight } from "@/shared/components/atoms/icons"

interface FormationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: FormationsData
}

export const FormationCard: React.FC<FormationCardProps> = ({
  data,
  className,
  ...props
}: FormationCardProps) => {
  return (
    <div
      className={
        "bg-dark-str col-span-1 border border-gray-600/[0.50] text-white w-fit p-6 rounded-lg " +
        className
      }
      {...props}
    >
      <div className="flex flex-col gap-y-4 rounded-sm">
        <div className="relative">
          <Image
            src={data.formationImage}
            alt={`${data.title.toLocaleLowerCase().replaceAll(" ", "_")}/svg`}
            width={334}
            height={139.16}
            className="w-[334px] h-[139.16px] rounded-sm"
          />
          {data.launching && (
            <div className="flex items-center gap-x-[4px] px-2 py-1 top-0 left-0 absolute bg-gradient-to-tr from-[#20a07a] via-[#5853b8] to-[#9d3eb5] rounded-br-md rounded-tl-sm shadow-md shadow-black/30">
              <Image src={rocket} alt="rocket/png" className="w-[16px]" />
              <span className="font-bold text-xs text-white tracking-wide">
                LANÇAMENTO
              </span>
            </div>
          )}
          <div className="absolute -top-[1px] -right-[1px]">
            <div className="relative">
              <Image src={vector} alt="vector/gif" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[26px] flex items-center gap-x-[6px]">
                {Array.from({ length: data.level }).map((_, index) => (
                  <div
                    key={index}
                    className="w-[10px] h-[10px] rounded-sm bg-system-success"
                  />
                ))}
                {Array.from({ length: 5 - data.level }).map((_, index) => (
                  <div
                    key={index}
                    className="w-[10px] h-[10px] rounded-sm bg-dark-low"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-xl font-bold leading-[28px]">{data.title}</h4>
        <div className="flex items-center gap-x-4">
          <img
            src={data.educatorImage}
            alt={`${data.educatorName
              .toLocaleLowerCase()
              .replaceAll(" ", "_")}/webp`}
          />
          <div>
            <h5 className="leading-[24px] font-bold">{data.educatorName}</h5>
            <span className="text-[#8D8D99] text-xs leading-[16px]">
              {data.role}
            </span>
          </div>
        </div>
        <Button className="!w-full py-4 bg-transparent text-sm tracking-normal border text-white !border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm">
          <span className="text-white">Ver detalhes</span>
          <ArrowRight className="-mb-[3px]" />
        </Button>
      </div>
    </div>
  )
}
