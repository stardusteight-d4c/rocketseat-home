import caretDown from "@/public/assets/icons/caret-down.svg"

interface FaqItemProps extends React.HTMLAttributes<HTMLDivElement> {
  data: FaqItem
  position: number
}

export const FaqItem: React.FC<FaqItemProps> = ({
  data,
  position,
  className,
  ...props
}: FaqItemProps) => {
  return (
    <div className={" " + className} {...props}>
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
        <img src={caretDown.src} alt="caret_down/svg" />
      </div>
    </div>
  )
}
