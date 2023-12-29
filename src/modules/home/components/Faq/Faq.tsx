"use client"

import { useState } from "react"
import { FaqItem } from "./components/FaqItem"
import { useFaq } from "./hooks/useFaq"

interface FaqProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Faq: React.FC<FaqProps> = ({ className, ...props }: FaqProps) => {
  const [show, setShow] = useState<number | undefined>(undefined)
  const { faqData } = useFaq()

  function handleShow(position: number) {
    if (show === position) {
      setShow(undefined)
    } else {
      setShow(position)
    }
  }

  return (
    <section className={"py-20 bg-dark-str " + className} {...props}>
      <div className="flex items-start gap-x-[154px] max-w-[1230px] w-full mx-auto">
        <div className="flex flex-col items-start gap-y-4">
          <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit">
            <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
              FAQ_
            </span>
          </div>
          <h2 className="text-4xl whitespace-nowrap font-bold leading-[40px] mt-6 w-full text-white">
            Perguntas e respostas <br /> mais frequentes
          </h2>
        </div>
        <div className="flex flex-col w-full">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              data={item}
              position={index + 1}
              show={show}
              onShow={handleShow}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
