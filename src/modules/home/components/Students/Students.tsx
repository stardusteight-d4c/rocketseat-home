"use client"

import { Slide } from "react-awesome-reveal"

import { useStudents } from "./hooks"

interface StudentsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Students: React.FC<StudentsProps> = ({
  className,
  ...props
}: StudentsProps) => {
  const { companies } = useStudents()

  return (
    <section
      className={
        "bg-dark-str max-w-[100vw] w-full py-20 flex items-center justify-center " +
        className
      }
      {...props}
    >
      <div className="flex items-center px-3 lg:px-0 flex-col lg:flex-row gap-y-16 lg:justify-between max-w-[1230px] w-full">
        <Slide direction="left" duration={700} triggerOnce>
          <div className="flex flex-col">
            <span className="text-neutral mx-auto lg:mx-0 leading-[24px]">
              Empresas que contratam nosso alunos
            </span>
            <div className="border-t h-[0px] w-full border-t-gray-600/[0.50] my-4" />
            <div className="flex flex-wrap lg:flex-nowrap gap-10 items-center justify-center">
              {companies.map((company, index) => (
                <img
                  key={index}
                  src={company.src}
                  alt={`${company.name
                    .toLocaleLowerCase()
                    .replaceAll(" ", "_")}/svg`}
                />
              ))}
            </div>
          </div>
        </Slide>
        <Slide direction="right" duration={700} triggerOnce>
          <div>
            <div className="flex items-center text-sm lg:text-base gap-x-6 text-neutral leading-[24px]">
              <img
                src="/image/students.png"
                alt="students/png"
                className="w-[147px]"
              />
              <span className="max-w-[257px] w-full">
                Mais de <strong>55 mil</strong> alunos e alunas no Brasil e no
                mundo. Junte-se a eles.
              </span>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  )
}
