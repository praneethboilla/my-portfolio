import type { SVGProps } from "react";

interface LinkedInMarkProps extends SVGProps<SVGSVGElement> {
  label?: string;
}

export function LinkedInMark({
  label = "Open LinkedIn profile",
  className = "",
  width = 20,
  height = 20,
  ...props
}: LinkedInMarkProps) {
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
      <path d="M5.18 3.5a2.18 2.18 0 1 1 0 4.36 2.18 2.18 0 0 1 0-4.36ZM3.3 9.1h3.76V21H3.3V9.1Zm5.82 0h3.61v1.63h.05c.5-.94 1.73-1.93 3.56-1.93 3.81 0 4.51 2.51 4.51 5.77V21h-3.76v-5.7c0-1.36-.03-3.1-1.89-3.1-1.89 0-2.18 1.48-2.18 3v5.8H9.12V9.1Z" />
    </svg>
  );
}
