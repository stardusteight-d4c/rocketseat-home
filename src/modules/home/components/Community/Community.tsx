interface CommunityProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Community: React.FC<CommunityProps> = ({
  className,
  ...props
}: CommunityProps) => {
  return (
    <section className={"bg-dark-str py-20 relative " + className} {...props}>
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-50 w-screen">
        <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit mx-auto">
          <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
            CONSTRUA O FUTURO_
          </span>
        </div>
        <h2 className="text-4xl font-bold text-center mx-auto leading-[40px] max-w-[612px] mt-6 w-full text-white">
          Junte-se a maior comunidade de devs da américa latina
        </h2>
      </div>
    </section>
  )
}
