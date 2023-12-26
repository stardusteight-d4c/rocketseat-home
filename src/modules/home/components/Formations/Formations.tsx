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
    <div
      className={
        "bg-dark-mid relative py-20 max-w-[100vw] w-full flex items-center justify-center " +
        className
      }
      {...props}
    >
      <div className="h-[80px] bg-gradient-to-b from-dark-str to-dark-mid absolute inset-x-0 -top-[50px]" />
      <div>
        <div className="bg-dark-str backdrop-blur-sm rounded-lg p-2 border border-gray-600/[0.50] w-fit mx-auto">
        <span className="font-bold uppercase bg-gradient-to-r bg-clip-textbg-gradient-to-r text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            DO ZERO AO AVANÇADO
          </span>
        </div>
        <h3 className="text-white text-4xl text-center font-bold leading-[40px] mt-5">
          Conheça nossas formações em programação
        </h3>
        <div className="mt-10 grid grid-cols-3 gap-[34px]">
          {formationsData.map((item, index) => (
            <FormationCard key={index} data={item} />
          ))}
        </div>
        <div className="max-w-[1230px] w-full">
          <div className="border-t h-[0px] w-full border-t-gray-600/[0.50] my-10" />
          <div className="grid grid-cols-4 gap-x-7 items-start">
            {infoData.map((item, index) => (
              <Info key={index} data={item} />
            ))}
          </div>
          <DiscoverCTA />
        </div>
      </div>
    </div>
  )
}
