import Image from "next/image"

import students from "@/public/assets/students.png"
import { useStudents } from "./hooks"

interface StudentsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Students: React.FC<StudentsProps> = ({
  className,
  ...props
}: StudentsProps) => {
  const { companies } = useStudents()

  return (
    <div
      className={
        "bg-dark-str max-w-[1256px] mx-auto w-full py-20 flex items-center justify-center " + className
      }
      {...props}
    >
      <div className="flex items-center gap-x-[254px]">
        <div className="flex flex-col">
          <span className="text-neutral leading-[24px]">
            Empresas que contratam nosso alunos
          </span>
          <div className="border-t h-[0px] w-full border-t-gray-600/[0.50] my-4" />
          <div className="flex gap-x-10 items-center">
            {companies.map((company, index) => (
              <Image
                key={index}
                src={company.src}
                alt={`${company.name
                  .toLocaleLowerCase()
                  .replaceAll(" ", "_")}/svg`}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-6 text-neutral leading-[24px]">
            <Image src={students} alt="students/png" className="w-[147px]" />
            <span className="max-w-[257px] w-full">
              Mais de <strong>55 mil</strong> alunos e alunas no Brasil e no
              mundo. Junte-se a eles.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
