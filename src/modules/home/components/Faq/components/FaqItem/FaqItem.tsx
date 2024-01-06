"use client"

import { Fade } from "react-awesome-reveal"

interface FaqItemProps extends React.HTMLAttributes<HTMLDivElement> {
  data: FaqItem
  position: number
  show: number | undefined
  onShow: (value: number) => void
}

export const FaqItem: React.FC<FaqItemProps> = ({
  data,
  position,
  show,
  onShow,
  className,
  ...props
}: FaqItemProps) => {
  return (
    <div className={"flex flex-col " + className} {...props}>
      <div
        onClick={() => onShow(position)}
        className="flex items-center cursor-pointer justify-between w-full border-t border-t-gray-600/[0.50] py-4"
      >
        <div className="flex items-center gap-x-10">
          <span className={`text-[#737380] text-xl block font-bold`}>
            {position}.
          </span>
          <h4
            className={`text-white font-bold text-lg ${
              position === 10 && "-ml-[11px]"
            }`}
          >
            {data.question}
          </h4>
        </div>
        <img
          src="/svg/icons/caret-down.svg"
          alt="caret_down/svg"
          className={`transition-all duration-300 ${show === position && "rotate-180"}`}
        />
      </div>
      {show === position && (
        <Fade duration={700}>
          <p className="leading-[24px] block px-4 pb-8 pt-3 text-[#A8A8B3]">
            {data.response}
          </p>
        </Fade>
      )}
    </div>
  )
}
