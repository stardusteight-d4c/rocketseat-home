import Image from "next/image"

interface SolutionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: SolutionCardData
  index: number
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  index,
  data,
  className,
  ...props
}: SolutionCardProps) => {
  const isEven = index % 2 === 0

  return (
    <div
      className={
        `items-center flex gap-x-10 max-w-[1230px] w-full mx-auto justify-between ${
          !isEven && "flex-row-reverse "
        }` + className
      }
      {...props}
    >
      <div>
        <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit">
          <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            {data.label}
          </span>
        </div>
        <h3 className="text-white font-bold text-3xl leading-[36px] my-6">
          {data.title}
        </h3>
        <span className="text-neutral leading-[24px]">{data.description}</span>
        {data.children && (
          <>
            <div className="border-t h-[0px] w-full border-t-gray-600/[0.50] my-6" />
            <data.children />
          </>
        )}
      </div>
      <div className="border relative border-gray-600/[0.50] overflow-hidden rounded-lg min-w-[588px] max-w-[588px] min-h-[397px] max-h-[397px]">
        <img
          src={data.image}
          alt={`${data.label.toLocaleLowerCase().replaceAll(" ", "_")}/webp`}
          className="w-[590px] h-[400px] -mt-[2px]"
        />
      </div>
    </div>
  )
}
