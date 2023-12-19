"use client"

import { ArrowDown } from "@/shared/components/atoms/icons"

import { useNavbar } from "../hooks/useNavbar"

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
        className="p-3 flex items-center flex-col transition-all cursor-pointer hover:bg-neutral/[0.20] rounded-lg"
      >
        <span className="flex items-center">
          {item.title}
          {item.dropdownContent && <ArrowDown className="-ml-1" />}
        </span>
        {item.dropdownContent && hover.isHover && (
          <div className="bg-dark-str z-[100] w-full px-5 pt-4 pb-10 text-gray-200 max-w-[1256px]">
            <NavbarDropdownContent item={item} />
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
        <div>
          <h2>Formações em programação</h2>
        </div>
      )
    }
  }

  function renderFreeContentDropdown() {
    if (item.dropdownContent?.card) {
      return (
        <div>
          <h2>Conteúdos gratuitos</h2>
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
