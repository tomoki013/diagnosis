import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const baseStyle =
    "px-8 py-3 rounded-full font-bold text-white shadow-lg transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-brand-primary to-brand-secondary hover:animate-glow focus:ring-brand-primary",
    secondary:
      "bg-gray-700 hover:bg-gray-600 focus:ring-gray-500",
  };

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} active:scale-95 ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
