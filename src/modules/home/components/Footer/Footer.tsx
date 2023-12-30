import mailCheck from "@/public/assets/icons/mail-check.svg"
import { ArrowRight } from "@/shared/components/atoms/icons"
import { Button } from "@/shared/components/atoms/ui/Button"
import { useFooter } from "./hooks/useFooter"
import { ListItem } from "./components/ListItem"

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = ({
  className,
  ...props
}: FooterProps) => {
  const { footerData } = useFooter()

  return (
    <section
      className={
        "bg-dark-str py pt-20 border-t border-t-gray-600/[0.50] " + className
      }
      {...props}
    >
      <div className="max-w-[1230px] mx-auto flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[25px]">
            <div className="flex items-center justify-center rounded-lg w-12 h-12 border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid">
              <img src={mailCheck.src} className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[#8D8D99] uppercase text-sm leading-[20px]">
                Newsletter
              </span>
              <h5 className="text-white font-bold leading-[32px] text-2xl">
                Receba conteúdos inéditos e novidades gratuitamente
              </h5>
            </div>
          </div>
          <Button className="!w-fit px-4 py-[10px] bg-transparent text-sm tracking-normal border text-white !border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm">
            <span className="text-white">Inscreva-se</span>
            <ArrowRight className="-mb-[3px]" />
          </Button>
        </div>
        <div className="border-y border-y-gray-600/[0.50] py-8 mt-8">
          <div className="grid grid-cols-5 w-full">
            {footerData.map((item, index) => (
              <ListItem key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
