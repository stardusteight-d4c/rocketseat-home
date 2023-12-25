import Image from "next/image"

import play from "@/public/assets/icons/play.svg"

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "title"> {
  children?: React.ReactNode
  asChild?: Boolean
  title?: string
  type?: "common" | "play"
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  type = "common",
  className,
  ...props
}: ButtonProps) => {
  if (type === "common") {
    return (
      <button
        className={
          "px-6 py-[14px] flex w-full rounded-lg transition-all gap-x-1 items-center justify-center cursor-pointer border-1 border-transparent " +
          className
        }
        {...props}
      >
        {children ? (
          <>{children}</>
        ) : (
          <span>{title}</span>
        )}
      </button>
    )
  }

  if (type === "play") {
    return (
      <div
        className={
          "flex items-center flex-col w-fit gap-y-2 h-fit " + className
        }
      >
        <button className="rounded-full py-7 pl-[30px] pr-[26px] bg-white/10 flex items-center justify-center">
          <Image src={play} alt="play/svg" />
        </button>
        <span className="max-w-[215px] font-bold text-lg w-full text-center leading-[24px]">
          {title}
        </span>
      </div>
    )
  }
}
