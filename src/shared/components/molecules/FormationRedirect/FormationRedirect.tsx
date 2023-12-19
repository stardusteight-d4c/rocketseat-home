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
    <div className="flex relative hover:bg-neutral/[0.10] border border-transparent w-full col-span-1 rounded-lg hover:border-gray-600/[0.25] items-center p-4 justify-between">
      <div className="flex items-center gap-2">
        {formation.title === "Formação Full-Stack" ? (
          <Image
            src={formation.emblem}
            width={81}
            height={48}
            alt={`${formation.title.toLocaleLowerCase()}/svg`}
          />
        ) : (
          <Image
            src={formation.emblem}
            width={48}
            height={48}
            alt={`${formation.title.toLocaleLowerCase()}/svg`}
          />
        )}
        <h3 className="font-medium text-xl text-white">{formation.title}</h3>
      </div>
      <ArrowRight />
      <div className="h-0 absolute border-t inset-x-0 top-full border-t-gray-600/[0.25]" />
    </div>
  )
}
