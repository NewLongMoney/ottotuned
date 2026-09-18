type OttoLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function OttoLogo({ className = "h-8", showWordmark = true }: OttoLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="17" stroke="#E10600" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.25" opacity="0.35" />
        <path
          d="M20 9.5 L22.2 17.2 L29.5 15.5 L23.5 20 L29.5 24.5 L22.2 22.8 L20 30.5 L17.8 22.8 L10.5 24.5 L16.5 20 L10.5 15.5 L17.8 17.2 Z"
          fill="#E10600"
          opacity="0.95"
        />
        <circle cx="20" cy="20" r="3.2" fill="currentColor" />
      </svg>
      {showWordmark && (
        <span className="font-display text-[1.15em] font-bold tracking-[0.14em] text-white">
          OTTO
        </span>
      )}
    </span>
  );
}
