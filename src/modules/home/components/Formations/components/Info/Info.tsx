interface InfoProps extends React.HTMLAttributes<HTMLDivElement> {
  data: InfoData
}

export const Info: React.FC<InfoProps> = ({
  data,
  className,
  ...props
}: InfoProps) => {
  return (
    <div className={"col-span-1 flex items-start flex-col " + className} {...props}>
      <div className="flex items-center justify-center rounded-lg w-12 h-12 border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid">
        <img src={data.image} className="w-6 h-6" />
      </div>
      <h4 className="mt-4 mb-3 font-bold text-white text-2xl leading-[32px]">
        {data.title}
      </h4>
      <span className="text-neutral text-start text-sm">{data.description}</span>
    </div>
  )
}
