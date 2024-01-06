"use client"

import { Fade, Bounce } from "react-awesome-reveal"

import { DiscoverCTA } from "./components/DiscoverCTA"
import { FormationCard } from "./components/FormationCard"
import { Info } from "./components/Info"

import { useFormations } from "./hooks/useFormations"

interface FormationsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Formations: React.FC<FormationsProps> = ({
  className,
  ...props
}: FormationsProps) => {
  const { formationsData, infoData } = useFormations()

  return (
    <section
      className={
        "bg-dark-mid relative py-20 max-w-[100vw] w-full flex items-center justify-center " +
        className
      }
      {...props}
    >
      <div className="h-[80px] bg-gradient-to-b from-dark-str to-dark-mid absolute inset-x-0 -top-[50px]" />
      <div className="px-3 lg:px-0">
        <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit lg:mx-auto">
          <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            DO ZERO AO AVANÇADO_
          </span>
        </div>
        <h3 className="text-white text-3xl lg:text-4xl lg:text-center font-bold leading-[40px] mt-5">
          Conheça nossas formações em programação
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[34px]">
          {formationsData.map((item, index) => (
            <FormationCard key={index} data={item} />
          ))}
        </div>
        <div className="max-w-[1230px] w-full">
          <div className="border-t h-[0px] w-full border-t-gray-600/[0.50] my-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-[34px] gap-7 items-start">
            <Fade cascade duration={700} triggerOnce>
              {infoData.map((item, index) => (
                <Info key={index} data={item} />
              ))}
            </Fade>
          </div>
          <DiscoverCTA />
        </div>
      </div>
    </section>
  )
}
