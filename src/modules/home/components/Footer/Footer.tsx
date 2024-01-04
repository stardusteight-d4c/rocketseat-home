import mailCheck from "@/public/assets/icons/mail-check.svg"
import boostingPeople from "@/public/assets/boosting-people.svg"
import caretDown from "@/public/assets/icons/caret-down.svg"
import arrowTop from "@/public/assets/icons/arrow-top.svg"

import { ArrowRight } from "@/shared/components/atoms/icons"
import { Button } from "@/shared/components/atoms/ui/Button"

import { useFooter } from "./hooks/useFooter"
import { ListItem } from "./components/ListItem"

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = ({
  className,
  ...props
}: FooterProps) => {
  const { footerData, socialLinks } = useFooter()

  return (
  
        <section
          className={
            "bg-dark-str pt-8 lg:pt-20 border-t border-t-gray-600/[0.50] flex flex-col " +
            className
          }
          {...props}
        >
          <div className="max-w-[1230px] mx-auto flex flex-col px-3 md:px-0">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="flex items-center gap-x-[25px]">
                <div className="flex items-center justify-center rounded-lg min-w-[48px] min-h-[48px] w-12 h-12 border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid">
                  <img src={mailCheck.src} className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="text-[#8D8D99] uppercase text-sm leading-[20px]">
                    Newsletter
                  </span>
                  <h5 className="text-white font-bold leading-[32px] text-xl lg:text-2xl">
                    Receba conteúdos inéditos e novidades gratuitamente
                  </h5>
                </div>
              </div>
              <Button className="lg:!w-fit mt-4 lg:mt-0 px-4 py-[10px] bg-transparent text-sm tracking-normal border text-white !border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm">
                <span className="text-white">Inscreva-se</span>
                <ArrowRight className="-mb-[3px]" />
              </Button>
            </div>
            <div className="border-y border-y-gray-600/[0.50] py-8 mt-8">
              <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:grid grid-cols-5 w-full">
                {footerData.map((item, index) => (
                  <ListItem key={index} data={item} />
                ))}
              </div>
            </div>
            <div className="border-b border-b-gray-600/[0.50] py-8 flex flex-col lg:flex-row justify-between lg:items-center">
              <img
                src={boostingPeople.src}
                alt="boosting_people/svg"
                className="w-[200px] lg:w-auto mb-4 lg:mb-0"
              />
              <div className="flex items-center flex-wrap gap-4 w-[250px] lg:w-auto">
                {socialLinks.map((item, index) => (
                  <ContentChildrenItem key={index} src={item.icon} />
                ))}
              </div>
            </div>
            <div className="border-b border-b-gray-600/[0.50] gap-y-4 py-8 flex justify-between flex-col lg:flex-row items-center">
              <span className="text-neutral block leading-[24px]">
                Rocketseat. Todos os direitos reservados.
              </span>
              <span className="text-neutral gap-x-1 cursor-pointer leading-[24px] underline flex items-center">
                Queremos o seu Feedback
                <img
                  src={caretDown.src}
                  alt="caret_down/svg"
                  className="-rotate-90 antialiased -mb-[2px]"
                />
              </span>
              <Button className="!w-fit flex gap-x-1 px-4 py-[10px] bg-transparent hover:bg-neutral/[0.10] font-bold text-sm tracking-normal bg-brand-primary text-white uppercase backdrop-blur-sm">
                Voltar ao topo
                <span>
                  <img
                    src={arrowTop.src}
                    alt="caret_down/svg"
                    className="antialiased"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div className="bg-gradient-rocketseat h-1 w-full" />
        </section>
    
    
  )
}

const ContentChildrenItem = ({ src }: { src: string }) => (
  <div className="flex items-center justify-center rounded-lg w-12 h-12 bg-gradient-to-t from-dark-low to-dark-mid">
    <img src={src} className="w-6 h-6" />
  </div>
)
