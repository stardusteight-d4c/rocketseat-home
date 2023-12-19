"use client"

import { ArrowDown } from "@/shared/components/atoms/icons"

import { useNavbar } from "../hooks/useNavbar"
import { FormationRedirect } from "@/shared/components/molecules/FormationRedirect"
import { DiscoverCard } from "@/shared/components/molecules/cards/DiscoverCard"

interface NavbarNavigationProps
  extends React.HTMLAttributes<HTMLUListElement> {}

export const NavbarNavigation: React.FC<NavbarNavigationProps> = ({
  ...props
}: NavbarNavigationProps) => {
  const { items } = useNavbar()

  return (
    <ul className="text-neutral flex items-center" {...props}>
      {items.map((item, index) => (
        <NavbarListItem item={item} key={index} />
      ))}
    </ul>
  )
}

interface NavbarListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  item: NavbarItem
}

const NavbarListItem: React.FC<NavbarListItemProps> = ({
  item,
}: NavbarListItemProps) => {
  const { hover } = useNavbar()

  return (
    <div>
      <li
        onMouseEnter={hover.handleMouseEnter}
        onMouseLeave={hover.handleMouseLeave}
        className="p-3 flex items-center flex-col transition-all cursor-pointer hover:bg-neutral/[0.10] rounded-lg"
      >
        <span className="flex items-center">
          {item.title}
          {item.dropdownContent && <ArrowDown className="-ml-1" />}
        </span>
        {item.dropdownContent && hover.isHover && (
          <div className="pt-[25px] mt-[35px] absolute left-1/2 -translate-x-1/2">
            <div className="bg-dark-str z-[100] border-b border-b-gray-600/[0.25] shadow-md px-5 pt-4 pb-10 text-gray-200 w-screen">
              <NavbarDropdownContent item={item} />
            </div>
          </div>
        )}
      </li>
    </div>
  )
}

interface NavbarDropdownContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  item: NavbarItem
}

const NavbarDropdownContent: React.FC<NavbarDropdownContentProps> = ({
  item,
}: NavbarDropdownContentProps) => {
  function renderFormationsDropdown() {
    if (item.dropdownContent?.formations) {
      return (
        <div className="max-w-[1256px] mx-auto">
          <h2 className="mb-4 uppercase font-medium text-gray-300">
            Formações em programação
          </h2>
          <div className="grid grid-cols-2 gap-x-16 w-full">
            {item.dropdownContent?.formations.map((formation, index) => (
              <FormationRedirect key={index} formation={formation} />
            ))}
          </div>
        </div>
      )
    }
  }

  function renderFreeContentDropdown() {
    if (item.dropdownContent?.card) {
      return (
        <div className="max-w-[1256px] mx-auto">
          <div className="flex items-center w-full">
            <DiscoverCard card={item.dropdownContent.card} />
          </div>
        </div>
      )
    }
  }

  return (
    <>
      {renderFormationsDropdown()}
      {renderFreeContentDropdown()}
    </>
  )
}
