export interface LogoProps extends React.AllHTMLAttributes<SVGAElement> {
  height?: string;
  width?: string;
  baseColor?: string;
  brandColor?: string;
}
export function Logo({
  height = "32",
  baseColor = "#F51717",
  brandColor = "#31353d",
}: LogoProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 99 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={baseColor} d="M42.5 0v30h8V19h11v-8h-11V8h15V0h-23z"></path>
      <path
        fill={baseColor}
        d="M63.763 0h8l10.263 30h-8.032l-6.23-18-6.232 18H53.5L63.763 0z"
      ></path>
      <path
        fill={brandColor}
        d="M79.281 0h4.5a9.5 9.5 0 019.177 11.965 9.5 9.5 0 015.323 8.535 9.5 9.5 0 01-9.5 9.5h-9.5v-8h9.5a1.5 1.5 0 100-3h-9.5v-8h4.5a1.5 1.5 0 100-3h-4.5V0z"
      ></path>
      <path fill={baseColor} d="M39.5 0h-19v8h11v22h8V0z"></path>
      <path fill={baseColor} d="M28.5 11h-8v19h8V11z"></path>
      <path
        fill={brandColor}
        d="M0 0v30h8V19l12.504-.004v-8L8 11V8h12.5V0H0z"
      ></path>
    </svg>
  );
}
