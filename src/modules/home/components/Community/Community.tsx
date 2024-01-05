import { CommunityCard } from "./components/CommunityCard"
import { useCommunity } from "./hooks/useCommunity"

interface CommunityProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Community: React.FC<CommunityProps> = ({
  className,
  ...props
}: CommunityProps) => {
  const { communityData } = useCommunity()

  return (
    <section
      className={"bg-dark-str px-3 lg:px-0 pt-20 pb-[240px] relative " + className}
      {...props}
    >
      <div className="border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid shadow-sm shadow-black/50 rounded-lg p-2 w-fit mx-auto">
        <span className="font-bold uppercase bg-gradient-to-tr text-transparent from-brand-primary to-brand-secondary bg-clip-text">
          CONSTRUA O FUTURO_
        </span>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-center mx-auto leading-[40px] max-w-[612px] mt-6 w-full text-white">
        Junte-se a maior comunidade de devs da américa latina
      </h2>
      <div className="max-w-[1230px] w-full mx-auto flex items-center flex-col gap-y-9 lg:flex-row justify-between mt-[60px]">
        {communityData.map((item, index) => (
          <CommunityCard key={index} data={item} />
        ))}
      </div>
    </section>
  )
}
