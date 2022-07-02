export interface IconProps extends React.AllHTMLAttributes<SVGAElement> {
  height?: string;
  width?: string;
  strokeColor?: string;
  fillColor?: string;
}
export function ChevronRight({
  height = "16",
  width = "9",
  strokeColor = "#262626",
}: IconProps) {
  return (
    <svg
      className="foo"
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L8 8L1 15"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeft({
  height = "16",
  width = "9",
  strokeColor = "#262626",
}: IconProps) {
  return (
    <svg
      className="foo"
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1L1 8l7 7"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
