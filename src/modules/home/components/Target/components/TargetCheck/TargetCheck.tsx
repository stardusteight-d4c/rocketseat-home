import check from "@/public/assets/icons/check.svg"
import Image from "next/image"

interface TargetCheckProps extends React.HTMLAttributes<HTMLDivElement> {
  target: string
}

export const TargetCheck: React.FC<TargetCheckProps> = ({
  target,
  className,
  ...props
}: TargetCheckProps) => {
  return (
    <div
      className={
        "flex flex-col col-span-1 items-center gap-y-[10px] " + className
      }
      {...props}
    >
      <Image src={check} alt="check/svg" />
      <span className="text-center text-neutral leading-[24px] max-w-[223px] w-full">{target}</span>
    </div>
  )
}
