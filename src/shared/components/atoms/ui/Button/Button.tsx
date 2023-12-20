interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "title"> {
  children?: React.ReactNode[]
  title?: string
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-6 py-[14px] flex w-full rounded-lg transition-all gap-x-1 items-center justify-center cursor-pointer border-1 border-transparent ${className}`}
      {...props}
    >
      {children && children.length > 0 ? <>{children}</> : <span>{title}</span>}
    </button>
  )
}
