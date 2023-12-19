interface ArrowDownProps extends React.HTMLAttributes<SVGSVGElement> {
  color?: string
  width?: string
  height?: string
}

export const ArrowDown: React.FC<ArrowDownProps> = ({
  color = "#F7F7FA",
  width = "25",
  height = "25",
  ...props
}: ArrowDownProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.66998 10.5001L12.67 14.5001L16.67 10.5001"
        stroke="#C4C4CC"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )
}
