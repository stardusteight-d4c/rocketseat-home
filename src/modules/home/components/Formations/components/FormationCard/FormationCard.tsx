import Image from "next/image"
import comet from "@/public/assets/comet.gif"

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
      <div className="flex flex-col gap-y-4">
        <div className="relative">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/556/915/desktop-wallpaper-how-to-install-reactjs-frontend.jpg"
            alt=""
            className="w-[334px] h-[139.16px] rounded-sm"
          />
          <div className="flex items-center gap-x-[2px] px-2 py-1 top-0 left-0 absolute bg-gradient-to-tl from-brand-primary to-brand-tertiary rounded-br-md rounded-tl-sm shadow-md">
            <Image src={comet} alt="comet/gif" className="w-[24px]" />
            <span className="font-bold text-xs text-white tracking-wide">LANÇAMENTO</span>
          </div>
        </div>
        <h4 className="text-xl font-bold leading-[28px]">Formação em Java</h4>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
