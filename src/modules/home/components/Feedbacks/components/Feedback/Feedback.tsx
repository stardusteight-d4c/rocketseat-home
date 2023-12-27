import Image from "next/image"

import play from "@/public/assets/icons/play-purple.svg"

interface FeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  data: FeedbackData
}

export const Feedback: React.FC<FeedbackProps> = ({
  data,
  className,
  ...props
}: FeedbackProps) => {
  function renderTextFeedback() {
    if (data.type === "text") {
      return (
        <div className="p-4 rounded-lg w-full max-w-[382px] border border-gray-600/[0.50]">
          <p className="leading-[24px] text-[#E1E1E6] mb-4">{data.feedback}</p>
          <div className="flex items-center gap-x-4">
            <img
              src={data.authorImage!}
              alt={`${data.author
                .toLocaleLowerCase()
                .replaceAll(" ", "_")}/webp`}
            />
            <div className="flex flex-col gap-y-[6px]">
              <h4 className="font-bold leading-[20px] text-neutral text-sm">
                {data.author}
              </h4>
              <span className="text-[#8D8D99] uppercase tracking-wide font-medium text-xs leading-[16px]">
                {data.role}
              </span>
            </div>
          </div>
        </div>
      )
    }
  }

  function renderVideoFeedback() {
    if (data.type === "video") {
      return (
        <div className="rounded-lg relative w-full max-w-[382px] h-[200px] border border-gray-600/[0.50]">
          <img
            src={data.thumb!}
            alt={`${data.author.toLocaleLowerCase().replaceAll(" ", "_")}/webp`}
            className="w-full h-full rounded-lg"
          />
          <div className="absolute z-10 left-4 bottom-5 flex flex-col gap-y-[6px]">
            <h4 className="font-bold leading-[20px] text-neutral text-sm">
              {data.author}
            </h4>
            <span className="text-[#8D8D99] uppercase font-medium text-xs leading-[16px]">
              {data.role}
            </span>
          </div>
          <button className="rounded-full w-[45px] h-[45px] absolute z-10 right-4 bottom-5 bg-white flex items-center justify-center">
            <Image src={play} alt="play/svg" className="-mr-[4px]" />
          </button>
        </div>
      )
    }
  }

  return (
    <div className={" " + className} {...props}>
      {renderTextFeedback()}
      {renderVideoFeedback()}
    </div>
  )
}
