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
      className="!w-fit lg:px-4 !px-3 !py-2 lg:py-[10px] bg-transparent text-sm tracking-normal border text-white !border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm"
      {...props}
    >
      <span className="text-white text-sm lg:text-base whitespace-nowrap">Assinar Agora</span>
      <ArrowRight className="-mb-[3px]" />
    </Button>
  )
}
