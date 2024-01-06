"use client"

import { useState } from "react"

import { Button } from "@/shared/components/atoms/ui/Button"

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
      <div className="flex px-3 lg:px-0 items-start flex-col lg:flex-row gap-x-[154px] max-w-[1230px] w-full mx-auto">
        <div className="flex flex-col items-start gap-y-4">
          <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit">
            <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
              FAQ_
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl mb-11 lg:mb-0 whitespace-nowrap font-bold leading-[40px] mt-6 w-full text-white">
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
          <div className="bg-dark-mid mt-20 w-full rounded-lg border border-gray-600/[0.50] p-6 flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex flex-col">
              <img
                src="/image/is-avatars.webp"
                alt="avatars/webp"
                className="w-[122px] h-[47px]"
              />
              <h5 className="mt-[19px] mb-[6px] text-[#E1E1E6] text-lg font-bold leading-[28px]">
                Ficou com alguma dúvida?
              </h5>
              <span className="block text-[#8D8D99] leading-[20px] w-[270px] text-sm">
                Envie uma mensagem e converse com uma pessoal real.
              </span>
            </div>
            <Button className="lg:!w-fit !py-4 mt-4 lg:mt-0 !bg-system-success text-sm hover:brightness-110 tracking-normal border !border-systbg-system-success !text-dark-mid uppercase font-bold backdrop-blur-sm">
              <span className="uppercase">Chamar no WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
