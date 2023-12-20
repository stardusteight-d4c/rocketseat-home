interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero: React.FC<HeroProps> = ({ ...props }: HeroProps) => {
  return <div {...props}></div>
}
