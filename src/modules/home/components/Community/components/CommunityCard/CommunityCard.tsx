import Link from "next/link"

import targetLink from "@/public/assets/icons/target-link.svg"

import { Button } from "@/shared/components/atoms/ui/Button"

interface CommunityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CommunityData
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  data,
  className,
  ...props
}: CommunityCardProps) => {
  return (
    <div
      className={
        "p-6 bg-transparent hover:bg-dark-low/30 lg:max-w-[278px] w-full h-[298px] rounded-lg flex flex-col gap-y-6 border border-gray-600/[0.50] " +
        className
      }
      {...props}
    >
      <div className="flex items-center justify-center rounded-lg min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid">
        <img src={data.icon} className="w-6 h-6" />
      </div>
      <h3 className="text-white text-3xl leading-[36px]">{data.title}</h3>
      <span className="text-neutral leading-[24px] block">
        {data.description}
      </span>
      {data.buttonTitle && (
        <Link href={data.buttonLink!} target="_blank" className="mt-auto">
          <Button className="text-center !py-4 bg-dark-low !text-sm tracking-normal border text-white border-darlbg-dark-low hover:!border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm">
            <span className="text-white whitespace-nowrap">
              {data.buttonTitle}
            </span>
            <img src={targetLink.src} />
          </Button>
        </Link>
      )}
    </div>
  )
}
