import Image from "next/image"

import { FormationCard } from "./components/FormationCard"

interface FormationsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Formations: React.FC<FormationsProps> = ({
  className,
  ...props
}: FormationsProps) => {
  return (
    <div
      className={
        "bg-dark-mid relative py-20 max-w-screen w-full flex items-center justify-center " +
        className
      }
      {...props}
    >
      <div className="h-[80px] bg-gradient-to-b from-dark-str to-dark-mid absolute inset-x-0 -top-[70px]" />
      <div>
        <div className="bg-dark-str backdrop-blur-sm rounded-lg p-2 border border-gray-600/[0.50] w-fit mx-auto">
          <span className="font-bold uppercase bg-gradient-to-br text-transparent from-white via-white/50 to-transparent bg-clip-text">
            DO ZERO AO AVANÇADO
          </span>
        </div>
        <h3 className="text-white text-4xl font-bold leading-[40px] mt-5">
          Conheça nossas formações em programação
        </h3>
        <div>
          <FormationCard />
        </div>
      </div>
    </div>
  )
}
