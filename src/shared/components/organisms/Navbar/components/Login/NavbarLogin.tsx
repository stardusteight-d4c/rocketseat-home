import Image from "next/image"

import person from "@/public/assets/icons/person.svg"
import { Button } from "@/shared/components/atoms/ui/Button"

interface NavbarLoginProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const NavbarLogin: React.FC<NavbarLoginProps> = ({
  className,
  ...props
}: NavbarLoginProps) => {
  return (
    <Button
      className="!w-fit  px-4 py-[10px] bg-transparent hover:bg-neutral/[0.10] font-bold text-sm tracking-normal bg-brand-primary text-white uppercase backdrop-blur-sm"
      {...props}
    >
      <Image src={person} width={24} height={24} alt="person/svg" />
      <span>Fazer Login</span>
    </Button>
  )
}
