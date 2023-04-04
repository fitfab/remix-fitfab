export interface LogoProps extends React.AllHTMLAttributes<SVGAElement> {
  height?: string;
  width?: string;
  baseColor?: string;
  brandColor?: string;
}
export function Logo({
  height = "32",
  brandColor = "#C9302F",
  baseColor = "#4B5768",
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="210"
      height="64"
      fill="none"
      viewBox="0 0 210 64"
    >
      <path
        fill={brandColor}
        d="M90.667 0v64h17.066V40.533H131.2V23.467h-23.467v-6.4h32V0H90.667z"
      ></path>
      <path
        fill={brandColor}
        d="M136.028 0h17.067l21.895 64h-17.136l-13.293-38.4L131.269 64h-17.136l21.895-64z"
      ></path>
      <path
        fill={baseColor}
        d="M169.133 0h9.6C189.926 0 199 9.074 199 20.267c0 1.819-.24 3.582-.689 5.259 6.725 3.297 11.356 10.212 11.356 18.207C209.667 54.926 200.593 64 189.4 64h-20.267V46.933H189.4a3.2 3.2 0 000-6.4h-20.267V23.467h9.6a3.2 3.2 0 100-6.4h-9.6V0z"
      ></path>
      <path fill={brandColor} d="M84.267 0H43.733v17.067H67.2V64h17.067V0z"></path>
      <path fill={brandColor} d="M60.8 23.467H43.733V64H60.8V23.467z"></path>
      <path
        fill={baseColor}
        d="M0 0v64h17.067V40.533l26.675-.008V23.458l-26.675.009v-6.4h26.666V0H0z"
      ></path>
    </svg>
  );
}
