import Image from "next/image"

import { ArrowRight } from "@/shared/components/atoms/icons"

interface FormationRedirectProps extends React.HTMLAttributes<HTMLDivElement> {
  formation: {
    title: string
    emblem: {
      src: string
    }
    new: boolean
  }
}

export const FormationRedirect: React.FC<FormationRedirectProps> = ({
  formation,
}: FormationRedirectProps) => {
  return (
    <div className="border-b border-gray-600/[0.25]">
      <div className="flex cursor-pointer relative hover:bg-neutral/[0.10] border border-transparent w-full lg:col-span-1 rounded-lg hover:border-gray-600/[0.25] items-center p-4 justify-between">
        <div className="flex items-center gap-2">
          {formation.title === "Formação Full-Stack" ? (
            <img
              src={formation.emblem.src}
              alt={`${formation.title.toLocaleLowerCase()}/svg`}
              className="w-[70px] h-[32px] lg:w-[81px] lg:h-[48px]"
            />
          ) : (
            <img
              src={formation.emblem.src}
              alt={`${formation.title.toLocaleLowerCase()}/svg`}
              className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
            />
          )}
          <h3 className="font-medium text-base lg:text-xl text-white">
            {formation.title}
          </h3>
        </div>
        <div className="flex items-center gap-x-2">
          {formation.new && (
            <p className="font-medium text-xs lg:text-base bg-brand-primary shadow-dark-mid shadow-md py-1 px-2 tracking-tight uppercase rounded-lg border border-gray-600/[0.50]">
              Novo
            </p>
          )}
          <ArrowRight />
        </div>
      </div>
    </div>
  )
}
