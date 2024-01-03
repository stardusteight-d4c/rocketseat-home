import tutores from "@/public/assets/tutores.png"
import Image from "next/image"

interface ExpertsChildrenProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ExpertsChildren: React.FC<ExpertsChildrenProps> = () => (
  <div className="flex lg:items-center flex-col-reverse lg:flex-row gap-4">
    <Image src={tutores} alt="tutores/png" quality={100} />
    <span className="text-neutral leading-[20px]">
      Nossos instrutores estão prontos para te ajudar a conquistar seu objetivo ✅
    </span>
  </div>
)
