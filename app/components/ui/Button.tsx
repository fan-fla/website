import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/app/data/site";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "dark";
  size?: "default" | "large";
  showIcon?: boolean;
  className?: string;
}

export function WhatsAppButton({
  children,
  variant = "dark",
  size = "default",
  showIcon = true,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-[30px] font-inter font-bold text-white transition-transform hover:scale-105";

  const variantClasses = {
    primary: "bg-[var(--flafla-orange)]",
    dark: "bg-[var(--flafla-dark-brown)]",
  };

  const sizeClasses = {
    default: "px-6 py-2.5 text-[13px] md:text-[14px]",
    large: "px-8 py-4 text-[14px] md:text-[15px]",
  };

  return (
    <a
      href={siteConfig.whatsapp.url}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {showIcon && <MessageCircle className="h-5 w-5" />}
      {children}
    </a>
  );
}
