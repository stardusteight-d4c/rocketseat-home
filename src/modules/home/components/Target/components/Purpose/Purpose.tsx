interface PurposeProps extends React.HTMLAttributes<HTMLDivElement> {
  data: PurposeData
  totalItems: number
  position: number
}

export const Purpose: React.FC<PurposeProps> = ({
  position,
  totalItems,
  data,
  className,
  ...props
}: PurposeProps) => {
  return (
    <div className={className} {...props}>
      <div className="flex flex-col gap-y-3">
        <h3 className="text-white text-2xl font-bold leading-[32px]">
          {data.title}
        </h3>
        <span className="text-neutral leading-[24px]">{data.subtitle}</span>
      </div>
      {position < totalItems && (
        <div className="border-t h-[0px] w-full border-t-gray-600/[0.50] mt-[26px] mb-7" />
      )}
    </div>
  )
}
