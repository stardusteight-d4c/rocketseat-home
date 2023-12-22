import Image from "next/image"
import rocket from "@/public/assets/rocket.png"
import ia from "@/public/assets/ia.svg"
import vector from "@/public/assets/vector.svg"

interface FormationCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormationCard: React.FC<FormationCardProps> = ({
  className,
  ...props
}: FormationCardProps) => {
  return (
    <div
      className={
        "bg-dark-str border border-gray-600/[0.50] text-white w-fit p-6 rounded-lg " +
        className
      }
      {...props}
    >
      <div className="flex flex-col gap-y-4 rounded-sm">
        <div className="relative">
          <Image
            src={ia}
            alt=""
            className="w-[334px] h-[139.16px] rounded-sm"
          />
          <div className="flex items-center gap-x-[4px] px-2 py-1 top-0 left-0 absolute bg-gradient-to-tr from-[#20a07a] via-[#5853b8] to-[#9d3eb5] rounded-br-md rounded-tl-md shadow-md shadow-black/30">
            <Image src={rocket} alt="rocket/png" className="w-[16px]" />
            <span className="font-bold text-xs text-white tracking-wide">
              LANÇAMENTO
            </span>
          </div>
          <div className="absolute top-0 right-0">
            <div className="relative">
              <Image src={vector} alt="vector/gif" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[26px] flex items-center gap-x-[6px]">
                <div className="w-[10px] h-[10px] rounded-sm bg-system-success" />
                <div className="w-[10px] h-[10px] rounded-sm bg-system-success" />
                <div className="w-[10px] h-[10px] rounded-sm bg-system-success" />
                <div className="w-[10px] h-[10px] rounded-sm bg-system-success" />
                <div className="w-[10px] h-[10px] rounded-sm bg-dark-low" />
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-xl font-bold leading-[28px]">Formação em Java</h4>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
