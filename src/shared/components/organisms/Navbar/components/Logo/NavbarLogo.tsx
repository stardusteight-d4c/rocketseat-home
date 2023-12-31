import { RocketseatLogo } from "@/shared/components/atoms/brand/RocketseatLogo"

interface NavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({
  ...props
}: NavbarLogoProps) => {
  return (
    <div {...props} className="cursor-pointer">
      <RocketseatLogo min={false} className="hidden md:block" />
      <RocketseatLogo min={true} className="block md:hidden" />
    </div>
  )
}
