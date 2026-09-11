import type { SVGProps } from "react";

interface GithubMarkProps extends SVGProps<SVGSVGElement> {
  label?: string;
}

export function GithubMark({
  label = "Open GitHub repository",
  className = "",
  width = 20,
  height = 20,
  ...props
}: GithubMarkProps) {
  return (
    <svg
      aria-label={label}
      className={`shrink-0 text-teal ${className}`}
      fill="currentColor"
      height={height}
      role="img"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.13c.85 0 1.7.12 2.5.37 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.6c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}