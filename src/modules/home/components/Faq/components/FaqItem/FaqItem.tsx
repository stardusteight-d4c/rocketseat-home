"use client"

import caretDown from "@/public/assets/icons/caret-down.svg"

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
      <div className="flex items-center cursor-pointer justify-between w-full border-t border-t-gray-600/[0.50] py-4">
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
          src={caretDown.src}
          alt="caret_down/svg"
          className={`${show === position && "rotate-180"}`}
          onClick={() => onShow(position)}
        />
      </div>
      {show === position && (
        <p className="leading-[24px] block px-4 pb-8 pt-3 text-[#A8A8B3]">
          {data.response}
        </p>
      )}
    </div>
  )
}
