"use client"

import { ArrowDown } from "@/shared/components/atoms/icons"

import { useNavigation } from "./hooks/useNavigation"

import { DiscoverCard, FormationRedirect, FreeContent } from "./components"

interface NavbarMobileNavigationProps
  extends React.HTMLAttributes<HTMLUListElement> {}

export const NavbarMobileNavigation: React.FC<NavbarMobileNavigationProps> = ({
  ...props
}: NavbarMobileNavigationProps) => {
  const { items } = useNavigation()

  return (
    <ul className="text-neutral flex flex-col" {...props}>
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
  const { click } = useNavigation()

  return (
    <div>
      <li
        onClick={() => click.setClick(!click.isClicked)}
        className="flex flex-col border-b border-b-gray-600/[0.25]"
      >
        <span className="flex px-4 justify-between items-center cursor-pointer py-3 transition-all hover:bg-neutral/[0.10] rounded-lg">
          {item.title}
          {item.dropdownContent && <ArrowDown className="-ml-1" />}
        </span>
        {item.dropdownContent && click.isClicked && (
          <div className="">
            <div className="bg-dark-str z-[100] pt-5 border-b border-b-gray-600/[0.25] text-gray-200 w-screen">
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
        <div>
          <h2 className="mb-4 px-4 uppercase text-sm font-medium text-gray-300/80">
            Formações em programação
          </h2>
          <div className="flex flex-col w-full">
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
        <div className="px-4 lg:px-0">
          <div className="flex h-full flex-col items-start w-full">
            <DiscoverCard card={item.dropdownContent.card} />
            <div className="w-full h-0 border-t my-4 border-t-gray-600/[0.25]" />
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
