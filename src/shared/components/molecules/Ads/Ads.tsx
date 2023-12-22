interface AdsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[]
}

export const Ads: React.FC<AdsProps> = ({
  children,
  className,
  ...props
}: AdsProps) => {
  return (
    <div
      className={
        "flex items-center text-white justify-center py-4 " + className
      }
      {...props}
    >
      {children}
    </div>
  )
}
