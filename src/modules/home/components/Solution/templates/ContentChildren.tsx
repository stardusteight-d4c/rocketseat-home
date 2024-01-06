const assetsData = [
  "/svg/icons/html.svg",
  "/svg/icons/css.svg",
  "/svg/icons/js.svg",
  "/svg/icons/react.svg",
  "/svg/icons/node.svg",
  "/svg/icons/react-native.svg",
  "/svg/icons/ts.svg",
  "/svg/icons/tailwind.svg",
]

interface ContentChildrenProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ContentChildren: React.FC<ContentChildrenProps> = () => (
  <div className="flex items-center flex-wrap gap-4 justify-start">
    {assetsData.map((item, index) => (
      <ContentChildrenItem key={index} src={item} />
    ))}
  </div>
)

const ContentChildrenItem = ({ src }: { src: string }) => (
  <div className="flex items-center justify-center rounded-lg w-12 h-12 border border-gray-600/[0.50] bg-gradient-to-t from-dark-low to-dark-mid">
    <img src={src} className="w-6 h-6" />
  </div>
)
