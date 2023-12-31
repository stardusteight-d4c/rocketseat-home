import menu from "@/public/assets/menu.svg"

interface NavbarRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children?: React.ReactNode[]
}

export const NavbarRoot: React.FC<NavbarRootProps> = ({
  children,
  className,
  ...props
}: NavbarRootProps) => {
  const hasLogo = children && children[0]
  const hasNavigation = children && children[1]
  const hasLogin = children && children[2]
  const hasSubscription = children && children[3]

  return (
    <nav
      className={
        "bg-dark-str z-[100] w-full relative border-b border-b-gray-600/[0.25] px-4 lg:px-0 h-fit py-4 lg:py-6 flex items-center justify-between " +
          className ?? ""
      }
      {...props}
    >
      <div className="max-w-[1256px] w-full h-fit flex items-center justify-between mx-auto">
        <div className="flex items-center">
          {hasLogo && children[0]}
          <div className="border-l h-[28px] block lg:hidden w-0 border-l-gray-600/[0.50] mx-2" />
          <img src={menu.src} alt="menu/svg" className="block lg:hidden cursor-pointer" />
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block">{hasNavigation && children[1]}</div>
          {hasLogin && (
            <div className="flex items-center">
              <div className="border-l hidden lg:block h-[48px] w-0 border-l-gray-600/[0.50] mx-2" />
              <div className="flex items-center gap-x-2">
                {children[2]}
                {hasSubscription && children[3]}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
