"use client"

import { ArrowDown } from "@/shared/components/atoms/icons"

import { useNavigation } from "./hooks/useNavigation"

import { FormationRedirect } from "./components/FormationRedirect"
import { DiscoverCard } from "./components/DiscoverCard"
import { FreeContent } from "./components/FreeContent"

interface NavbarNavigationProps
  extends React.HTMLAttributes<HTMLUListElement> {}

export const NavbarNavigation: React.FC<NavbarNavigationProps> = ({
  ...props
}: NavbarNavigationProps) => {
  const { items } = useNavigation()

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
  const { hover } = useNavigation()

  return (
    <div>
      <li
        onMouseEnter={hover.handleMouseEnter}
        onMouseLeave={hover.handleMouseLeave}
        className="flex items-center flex-col"
      >
        <span className="flex items-center cursor-pointer p-3 transition-all hover:bg-neutral/[0.10] rounded-lg">
          {item.title}
          {item.dropdownContent && <ArrowDown className="-ml-1" />}
        </span>
        {item.dropdownContent && hover.isHover && (
          <div className="pt-[25px] mt-[35px] absolute left-1/2 -translate-x-1/2">
            <div className="bg-dark-str z-[100] pt-8 border-b border-b-gray-600/[0.25] shadow-md px-5 pb-10 text-gray-200 w-screen">
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
          <h2 className="mb-4 uppercase font-medium text-gray-300/80">
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
        <div className="max-w-[1256px] h-full mx-auto">
          <div className="flex h-full items-start gap-x-[120px] w-full">
            <DiscoverCard card={item.dropdownContent.card} />
            <div className="h-[345px] w-0 border-l border-l-gray-600/[0.25]" />
            <FreeContent contentList={item.dropdownContent.contentList} />
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
