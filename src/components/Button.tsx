import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "whatsapp";
  size?: "default" | "large";
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  external = false,
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0EA5E9] disabled:opacity-50";
  
  const sizes = {
    default: "h-12 px-5 text-[15px] rounded-[5px]",
    large: "h-14 px-7 text-base rounded-[5px]",
  };
  
  const variants = {
    primary:
      "bg-[#0EA5E9] text-white hover:bg-[#0284C7] focus-visible:ring-[#0EA5E9]",
    secondary:
      "bg-transparent text-[#0F172A] border border-[#0F172A] hover:bg-[#0F172A] hover:text-white",
    accent:
      "bg-[#F59E0B] text-white hover:bg-[#D97706] focus-visible:ring-[#F59E0B]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20bd5a] focus-visible:ring-[#25D366]",
  };
  
  const width = fullWidth ? "w-full" : "";
  
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${width} ${className}`;
  
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
