import html from "@/public/assets/icons/html.svg"
import css from "@/public/assets/icons/css.svg"
import js from "@/public/assets/icons/js.svg"
import react from "@/public/assets/icons/react.svg"
import node from "@/public/assets/icons/node.svg"
import reactNative from "@/public/assets/icons/react-native.svg"
import ts from "@/public/assets/icons/ts.svg"
import tailwind from "@/public/assets/icons/tailwind.svg"

const assetsData = [
  html.src,
  css.src,
  js.src,
  react.src,
  node.src,
  reactNative.src,
  ts.src,
  tailwind.src,
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
