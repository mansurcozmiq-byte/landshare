import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "copper" | "whatsapp";
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
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9824B] disabled:opacity-50";
  
  const sizes = {
    default: "h-12 px-5 text-[15px] rounded-[5px]",
    large: "h-14 px-7 text-base rounded-[5px]",
  };
  
  const variants = {
    primary:
      "bg-[#101820] text-white hover:bg-[#1a2530] focus-visible:ring-[#101820]",
    secondary:
      "bg-transparent text-[#101820] border border-[#101820] hover:bg-[#101820] hover:text-white",
    copper:
      "bg-[#C9824B] text-white hover:bg-[#b8733f] focus-visible:ring-[#C9824B]",
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
