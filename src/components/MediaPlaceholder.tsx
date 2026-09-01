import type { ReactNode } from "react";

export function ImagePlaceholder({
  label = "Your Image Here",
  hint,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label?: string;
  hint?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={`media-frame media-frame-grid ${ratio} ${className}`}>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-card/70 text-primary">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M4 16.5 8.5 11l4 4.5L15.5 12l4.5 5M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="font-display text-lg text-secondary-foreground">{label}</p>
        {hint ? <p className="hairline-label">{hint}</p> : null}
      </div>
      <span className="pointer-events-none absolute inset-3 z-10 rounded-[inherit] border border-dashed border-primary/15" />
    </div>
  );
}

export function VideoPlaceholder({
  label = "Drop Your Reel Here",
  hint = "Vertical Reel · MP4",
  className = "",
  ratio = "aspect-[9/16]",
  children,
}: {
  label?: string;
  hint?: string;
  className?: string;
  ratio?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`media-frame ${ratio} ${className}`}>
      <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-card/60 to-transparent" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
        <span className="float-slow flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-card/80 text-accent shadow-[var(--shadow-soft)]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 translate-x-[1px]">
            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
          </svg>
        </span>
        <p className="font-display text-xl text-secondary-foreground">{label}</p>
        <p className="hairline-label">{hint}</p>
        {children}
      </div>
      <span className="pointer-events-none absolute inset-3 z-10 rounded-[inherit] border border-dashed border-accent/20" />
    </div>
  );
}
