interface NavbarRootProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarRoot: React.FC<NavbarRootProps> = ({
  children,
  className,
  ...props
}: NavbarRootProps) => {
  return (
    <nav
      className={"bg-dark-str z-[100] w-full relative border-b border-b-gray-600/[0.25] h-fit py-6 px-10 flex items-center justify-between " + className ?? ''}
      {...props}
    >
      {children}
    </nav>
  )
}
