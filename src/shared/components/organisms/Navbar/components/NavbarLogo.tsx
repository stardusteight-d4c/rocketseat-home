import { RocketseatLogo } from "@/shared/components/atoms/brand/RocketseatLogo"

interface NavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({
  ...props
}: NavbarLogoProps) => {
  return (
    <div {...props}>
      <RocketseatLogo />
    </div>
  )
}
