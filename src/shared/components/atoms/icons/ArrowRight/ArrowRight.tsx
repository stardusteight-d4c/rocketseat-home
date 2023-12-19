interface ArrowRightProps extends React.HTMLAttributes<SVGSVGElement> {
  color?: string
  width?: string
  height?: string
}

export const ArrowRight: React.FC<ArrowRightProps> = ({
  color = "#F7F7FA",
  width = "25",
  height = "25",
  ...props
}: ArrowRightProps) => {
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
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
