import { ArrowRight } from "../../icons"

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "title"> {
  type?: "link"
  title: string
  textHexColor?: string
}

export const Button: React.FC<ButtonProps> = ({
  type = "link",
  title,
  className,
  textHexColor = "#FFFFFF",
  ...props
}: ButtonProps) => {
  function renderLinkButton() {
    if (type === "link") {
      return (
        <button
          className={`px-6 py-[14px] flex w-full hover:brightness-110 rounded-lg transition-all gap-x-1 items-center justify-center cursor-pointer border border-transparent text-[${textHexColor}}] ${className}`}
          {...props}
        >
          <span>{title}</span>
          <ArrowRight color={textHexColor} />
        </button>
      )
    }
  }

  return renderLinkButton()
}
