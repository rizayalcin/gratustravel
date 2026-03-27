const GratusLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: { main: "text-xl", sub: "text-[0.7rem] tracking-[0.35em]", gap: "gap-0" },
    md: { main: "text-2xl md:text-3xl", sub: "text-xs md:text-sm tracking-[0.35em]", gap: "gap-0.5" },
    lg: { main: "text-4xl md:text-5xl", sub: "text-lg md:text-xl tracking-[0.4em]", gap: "gap-1" },
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col items-start ${s.gap} leading-none`}>
      <span className={`font-display ${s.main} font-semibold text-foreground tracking-[0.15em]`}>
        GRATUS
      </span>
      <span className={`font-body ${s.sub} font-light text-primary uppercase self-end`}>
        Travel
      </span>
    </div>
  );
};

export default GratusLogo;
