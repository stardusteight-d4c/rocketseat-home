"use client"

import { useState } from "react"

import menu from "@/public/assets/menu.svg"
import close from "@/public/assets/close.svg"
import whatsappLogo from "@/public/assets/icons/whatsapp-logo.svg"

import { NavbarMobileNavigation } from "../Navigation/NavbarMobileNavigation"
import { Button } from "@/shared/components/atoms/ui/Button"
import { ArrowRight } from "@/shared/components/atoms/icons"

interface NavbarRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children?: React.ReactNode[]
}

export const NavbarRoot: React.FC<NavbarRootProps> = ({
  children,
  className,
  ...props
}: NavbarRootProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const hasLogo = children && children[0]
  const hasNavigation = children && children[1]
  const hasLogin = children && children[2]
  const hasSubscription = children && children[3]

  return (
    <nav
      className={
        "bg-dark-str z-[100] w-full relative border-b border-b-gray-600/[0.25] px-4 lg:px-0 h-fit py-4 lg:py-6 flex items-center justify-between " +
          className ?? ""
      }
      {...props}
    >
      <div className="max-w-[1256px] w-full h-fit flex items-center justify-between mx-auto">
        <div className="flex items-center">
          {hasLogo && children[0]}
          <div className="flex items-center lg:hidden">
            <div className="border-l h-[28px] block lg:hidden w-0 border-l-gray-600/[0.50] mx-2" />
            {openMenu ? (
              <img
                src={close.src}
                alt="close/svg"
                onClick={() => setOpenMenu(false)}
                className="block lg:hidden cursor-pointer"
              />
            ) : (
              <img
                src={menu.src}
                alt="menu/svg"
                onClick={() => setOpenMenu(true)}
                className="block lg:hidden cursor-pointer"
              />
            )}
            {openMenu && (
              <div className="bg-dark-str flex flex-col absolute border-y border-y-gray-600/[0.50] shadow-md shadow-black/50 top-full inset-x-0">
                {hasNavigation && <NavbarMobileNavigation />}
                <div className="flex flex-col gap-y-4 px-4 py-6">
                  <Button className="w-full lg:!max-w-[190px] text-center !py-4 bg-dark-low !text-sm tracking-normal border text-white border-darlbg-dark-low hover:!border-brand-primary hover:bg-brand-primary uppercase font-bold backdrop-blur-sm">
                    <img src={whatsappLogo.src} className="w-[18px] h-[18px]" />
                    <span className="text-white uppercase whitespace-nowrap">
                      Fale conosco
                    </span>
                  </Button>
                  <Button className="w-full lg:!max-w-[190px] !py-4 text-sm hover:brightness-110 tracking-normal border text-white hover:bg-brand-primary !border-brand-primary bg-transparent uppercase font-bold backdrop-blur-sm">
                    <span className="text-white uppercase whitespace-nowrap">
                      Fazer login
                    </span>
                    <ArrowRight className="-mb-[3px]" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block">{hasNavigation && children[1]}</div>
          {hasLogin && (
            <div className="flex items-center">
              <div className="border-l hidden lg:block h-[48px] w-0 border-l-gray-600/[0.50] mx-2" />
              <div className="flex items-center gap-x-2">
                {children[2]}
                {hasSubscription && children[3]}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
