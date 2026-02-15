interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  labelColor?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  labelColor = "var(--flafla-orange)",
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${centered ? "items-center" : "items-start"}`}
    >
      <span
        className="font-inter text-[11px] font-semibold uppercase tracking-[2px] md:text-[12px]"
        style={{ color: labelColor }}
      >
        {label}
      </span>
      <h2
        className={`font-poppins text-[24px] font-bold text-[var(--text-dark)] md:text-[32px] lg:text-[42px] ${centered ? "text-center" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-inter text-[14px] font-normal text-[var(--text-body)] md:text-[16px] lg:text-[17px] ${centered ? "text-center" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
