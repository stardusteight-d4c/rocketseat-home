"use client"

import { useState } from "react"

import asset from "@/public/assets/feedback-section-asset.png"
import arrowDown from "@/public/assets/icons/arrow-down-white.svg"
import plus from "@/public/assets/icons/plus.svg"
import minus from "@/public/assets/icons/minus.svg"

import { useFeedbacks } from "./hooks/useFeedbacks"
import { Feedback } from "./components/Feedback"
import { Button } from "@/shared/components/atoms/ui/Button"
import Image from "next/image"

interface FeedbacksProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Feedbacks: React.FC<FeedbacksProps> = ({
  className,
  ...props
}: FeedbacksProps) => {
  const { feedbackFirstColData, feedbackSecondColData, feedbackThirdColData } =
    useFeedbacks()

  const [sliceValue, setSliceValue] = useState(3)

  return (
    <section className={"bg-dark-mid py-20 relative " + className} {...props}>
      <img
        src={asset.src}
        alt="asset/png"
        className="absolute top-0 right-0 z-0 w-[669px] h-[497px]"
      />
      <div className="max-w-[1230px] w-full mx-auto relative z-10">
        <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit">
          <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            DEPOIMENTOS DE ALUNOS E ALUNAS_
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-4xl font-bold text-white leading-[40px] mt-8 mb-[60px] w-full max-w-[670px]">
            Eles conquistaram seus objetivos de carreira e transformaram suas
            vidas
          </h3>
          <div className="flex items-center gap-x-4">
            <span className="w-[200px] block text-lg text-white/80 leading-[28px]">
              O próximo depoimento pode ser seu!
            </span>
            <img src={arrowDown.src} alt="arrow_down/svg" className="w-8 h-8" />
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-8">
              {feedbackFirstColData.slice(0, sliceValue).map((item, index) => (
                <Feedback key={index} data={item} />
              ))}
            </div>
            <div className="flex flex-col gap-y-8">
              {feedbackSecondColData.slice(0, sliceValue).map((item, index) => (
                <Feedback key={index} data={item} />
              ))}
            </div>
            <div className="flex flex-col gap-y-8">
              {feedbackThirdColData.slice(0, sliceValue).map((item, index) => (
                <Feedback key={index} data={item} />
              ))}
            </div>
          </div>
          {sliceValue === 3 && (
            <div>
              <div className="w-full h-[100px] bg-gradient-to-t from-dark-mid to-transparent absolute bottom-12" />
              <Button
                onClick={() => setSliceValue(6)}
                className="!w-fit px-4 py-[10px] mx-auto bg-transparent text-sm tracking-normal border text-white !border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm"
              >
                <Image src={plus} alt="plus/svg" />
                <span className="text-white">Mostrar mais</span>
              </Button>
            </div>
          )}
          {sliceValue === 6 && (
            <div>
              <Button
                onClick={() => setSliceValue(3)}
                className="!w-fit px-4 py-[10px] mx-auto bg-transparent text-sm tracking-normal border text-white !border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm"
              >
                <Image src={minus} alt="minus/svg" />
                <span className="text-white">Mostrar menos</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
