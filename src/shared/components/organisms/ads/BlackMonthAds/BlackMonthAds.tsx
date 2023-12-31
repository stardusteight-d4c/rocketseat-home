import Image from "next/image"
import Link from "next/link"

import { Ads } from "@/shared/components/molecules/Ads"
import blackMonth from "@/public/assets/black-month.svg"

interface BlackMonthAdsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BlackMonthAds: React.FC<BlackMonthAdsProps> = ({
  ...props
}: BlackMonthAdsProps) => {
  return (
    <Ads
      className="bg-gradient-to-tr flex flex-col lg:flex-row from-brand-primary to-brand-tertiary"
      {...props}
    >
      <Image src={blackMonth} alt="black_month/svg" />
      <span className="ml-2 -mt-[2px] text-center lg:text-start">
        A Black Month já começou! Garanta o maior desconto do ano.{" "}
        <Link href="#" className="font-bold cursor-pointer hover:underline">
          Ver ofertas exclusivas
        </Link>
      </span>
    </Ads>
  )
}
