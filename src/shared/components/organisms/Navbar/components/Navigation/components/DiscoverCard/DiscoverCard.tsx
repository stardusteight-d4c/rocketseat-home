import { Button } from "@/shared/components/atoms/ui/Button"
import { ArrowRight } from "@/shared/components/atoms/icons"

interface DiscoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  card: {
    title: string
    subtitle: string
    action: {
      title: string
      link: string
    }
  }
}

export const DiscoverCard: React.FC<DiscoverCardProps> = ({
  card,
  ...props
}: DiscoverCardProps) => {
  return (
    <div
      className="p-6 w-full rounded-lg bg-[#4863F7] shadow-md shadow-black/30 text-white"
      {...props}
    >
      <div className="flex flex-col gap-y-4">
        <img
          src="/svg/discover-light.svg"
          width="162"
          height="40"
          alt="discover_logo/svg"
        />
        <h3 className="font-bold text-2xl">{card.title}</h3>
        <span>{card.subtitle}</span>
        <Button className="!w-fit hover:brightness-125 bg-black/70 text-white uppercase font-bold tracking-tight backdrop-blur-sm">
          {card.action.title}
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}
