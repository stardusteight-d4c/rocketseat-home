import discoverLogo from "@/shared/assets/discover-light.svg"
import Image from "next/image"

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
    <div {...props} className="p-6 rounded-lg bg-[#4863F7] text-white">
      <div>
        <Image
          src={discoverLogo}
          width="162"
          height="40"
          alt="discover_logo/svg"
        />
        <h3>{card.title}</h3>
        <span>{card.subtitle}</span>
        {/* Button atom */}
      </div>
    </div>
  )
}
