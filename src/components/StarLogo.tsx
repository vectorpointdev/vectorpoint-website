interface StarLogoProps {
  className?: string;
  size?: number;
}

export default function StarLogo({ className = "", size = 24 }: StarLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/*
        Four-pointed star matching the Vector Point logo.
        Top spike is tallest, bottom is shortest, left/right are medium.
        Inner valleys are pinched tight to the center for a blade-like look.
      */}
      <path
        d={[
          "M50 2",     // top tip
          "L53 43",    // right edge of top spike → inner
          "L88 43",    // right tip
          "L57 50",    // inner valley bottom-right of right spike
          "L50 95",    // bottom tip
          "L43 50",    // inner valley bottom-left
          "L12 43",    // left tip
          "L47 43",    // inner valley top-left
          "Z",
        ].join(" ")}
      />
    </svg>
  );
}
