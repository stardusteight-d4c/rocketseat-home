import { RocketseatLogo } from "@/shared/components/atoms/RocketseatLogo"

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
