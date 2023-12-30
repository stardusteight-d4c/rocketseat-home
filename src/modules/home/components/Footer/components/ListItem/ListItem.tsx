import whatsappLogo from "@/public/assets/icons/whatsapp-logo.svg"

import { ArrowRight } from "@/shared/components/atoms/icons"
import { Button } from "@/shared/components/atoms/ui/Button"

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  data: FooterData
}

export const ListItem: React.FC<ListItemProps> = ({
  data,
  className,
  ...props
}: ListItemProps) => {
  function renderingActionButtons() {
    if (data.category === "Comece a estudar") {
      return (
        <ul className="flex flex-col gap-y-4">
          <Button className="w-full !max-w-[190px] !py-4 text-sm hover:brightness-110 tracking-normal border text-white !border-brand-primary bg-brand-primary uppercase font-bold backdrop-blur-sm">
            <span className="text-white uppercase whitespace-nowrap">
              {data.items[0].title}
            </span>
            <ArrowRight className="-mb-[3px]" />
          </Button>
          <Button className="w-full !max-w-[190px] text-center !py-4 bg-dark-low !text-sm tracking-normal border text-white border-darlbg-dark-low hover:!border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm">
            <img src={whatsappLogo.src} className="w-[18px] h-[18px]" />
            <span className="text-white uppercase whitespace-nowrap">
              {data.items[1].title}
            </span>
          </Button>
        </ul>
      )
    }
  }

  function renderingDefaultItems() {
    if (data.category !== "Comece a estudar") {
      return (
        <ul className="flex flex-col gap-y-2">
          {data.items.map((item, index) => (
            <li key={index} className="text-[#E1E1E6] block w-fit cursor-pointer hover:underline leading-[24px]">
              {item.title}
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <div
      className={
        `col-span-1 flex flex-col ${
          data.category === "Para empresas" && "col-start-5 "
        }` + className
      }
      {...props}
    >
      <h5 className="text-[#8D8D99] font-medium uppercase leading-[20px] mb-4">
        {data.category}
      </h5>
      {renderingDefaultItems()}
      {renderingActionButtons()}
    </div>
  )
}
