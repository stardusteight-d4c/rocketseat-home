import { ArrowRight } from "@/shared/components/atoms/icons"
import { Button } from "@/shared/components/atoms/ui/Button"

interface NavbarSubscriptionProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const NavbarSubscription: React.FC<NavbarSubscriptionProps> = ({
  children,
  className,
  ...props
}: NavbarSubscriptionProps) => {
  return (
    <Button
      className="!w-fit px-4 py-[10px] bg-transparent text-sm tracking-normal hover:bg-brand-primary border text-white !border-brand-primary uppercase font-bold backdrop-blur-sm"
      {...props}
    >
      <span className="text-white">Assinar Agora</span>
      <ArrowRight className="-mb-[3px]" />
    </Button>
  )
}
