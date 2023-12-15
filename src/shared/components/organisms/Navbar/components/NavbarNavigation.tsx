interface NavbarNavigationProps
  extends React.HTMLAttributes<HTMLUListElement> {}

export const NavbarNavigation: React.FC<NavbarNavigationProps> = ({
  ...props
}: NavbarNavigationProps) => {
  return (
    <ul className="text-neutral flex items-center" {...props}>
      <li className="p-3">Formações</li>
      <li className="p-3">Conteúdos gratuitos</li>
      <li className="p-3">Depoimentos</li>
      <li className="p-3">Para empresas</li>
    </ul>
  )
}
