"use client";

import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { useLenis } from "@/hooks/use-lenis";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
}

export default function ActionButton({
  text,
  icon: Icon,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}: ActionButtonProps) {
  const router = useRouter();
  const { lenis } = useLenis();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (href) {
      // Stop scroll momentum and reset position before navigation
      if (lenis) {
        lenis.stop();
        lenis.scrollTo(0, { immediate: true });
      }
      setTimeout(() => {
        router.push(href);
      }, 50);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={type === "submit" ? undefined : handleClick}
      className={`flex flex-row bg-accent text-white text-lg md:text-xl py-1.5 pl-3 pr-1.5 rounded-full gap-3 items-center hover:scale-105 transition-all duration-500 cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
      {...props}
    >
      <div>{text}</div>
      <div className="bg-white text-background rounded-full p-1.5 overflow-hidden relative w-7 h-7 shrink-0">
        <div className="absolute inset-0 flex items-center justify-center group-hover:translate-x-20 group-hover:-translate-y-20 transition-all duration-500 ease-in-out">
          <Icon size={19} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center -translate-x-20 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <Icon size={19} />
        </div>
      </div>
    </button>
  );
}
