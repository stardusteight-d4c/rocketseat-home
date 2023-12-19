import { ArrowRight } from "@/shared/components/atoms/icons"

interface FreeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  contentList: string[]
}

export const FreeContent: React.FC<FreeContentProps> = ({
  contentList,
  ...props
}: FreeContentProps) => {
  return (
    <div className="w-full" {...props}>
      <h2 className="mb-4 uppercase font-medium text-gray-300/80">
        Conteúdos gratuitos
      </h2>
      {contentList.map((item, index) => (
        <div
          key={index}
          className="flex cursor-pointer relative hover:bg-neutral/[0.10] border border-transparent w-full rounded-lg hover:border-gray-600/[0.25] items-center p-4 justify-between"
        >
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-xl text-white">{item}</h3>
          </div>
          <div className="flex items-center gap-x-2">
            <ArrowRight />
          </div>
          <div className="h-0 absolute border-t inset-x-0 top-full border-t-gray-600/[0.25]" />
        </div>
      ))}
    </div>
  )
}
