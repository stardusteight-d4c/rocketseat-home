import { ArrowDown } from "@/shared/components/atoms/icons"

import { useNavbarItemsData } from "../hooks/useNavbarItemsData"

interface NavbarNavigationProps
  extends React.HTMLAttributes<HTMLUListElement> {}

export const NavbarNavigation: React.FC<NavbarNavigationProps> = ({
  ...props
}: NavbarNavigationProps) => {
  const { items } = useNavbarItemsData()

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
  return (
    <div>
      <li className="p-3 flex items-center transition-all cursor-pointer hover:bg-neutral/[0.20] rounded-lg">
        {item.title}
        {item.dropdownContent && <ArrowDown className="-ml-1" />}
      </li>
    </div>
  )
}
