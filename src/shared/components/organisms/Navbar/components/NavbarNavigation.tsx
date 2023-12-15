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
        <NavbarListItem title={item.title} key={index} />
      ))}
    </ul>
  )
}

interface NavbarListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  title: string
}

const NavbarListItem: React.FC<NavbarListItemProps> = ({
  title,
}: NavbarListItemProps) => {
  return (
    <li className="p-3 transition-all cursor-pointer hover:bg-neutral/[0.20] rounded-lg">
      {title}
    </li>
  )
}
