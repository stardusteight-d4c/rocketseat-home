import Image from "next/image"
import { ArrowRight } from "../../atoms/icons"

interface FormationRedirectProps extends React.HTMLAttributes<HTMLDivElement> {
  formation: {
    title: string
    emblem: string
    new: boolean
  }
}

export const FormationRedirect: React.FC<FormationRedirectProps> = ({
  formation,
}: FormationRedirectProps) => {
  return (
    <div className="flex hover:bg-neutral/[0.20] border-transparent rounded-lg hover:border-gray-300 w-1/2 items-center p-4 justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={formation.emblem}
          width={48}
          height={48}
          alt={`${formation.title.toLocaleLowerCase()}/svg`}
        />
        <h3 className="font-medium text-xl text-white">{formation.title}</h3>
      </div>
      <ArrowRight />
    </div>
  )
}
