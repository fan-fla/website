interface CapulanaStripProps {
  className?: string;
}

const colors = [
  "#f46535", // orange
  "#E8A832", // gold
  "#3F8C4A", // green
  "#D4451A", // terracotta
  "#E8A832", // gold
  "#f46535", // orange
  "#3F8C4A", // green
  "#D4451A", // terracotta
];

export function CapulanaStrip({ className }: CapulanaStripProps) {
  return (
    <div className={`flex h-3 w-full lg:h-4 ${className || ""}`}>
      {colors.map((color, index) => (
        <div
          key={index}
          className="flex-1"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
