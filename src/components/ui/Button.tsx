import type { ReactNode } from "react";

// ボタンのProps（プロパティ）を定義します
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary"; // ボタンの種類を追加
}

export const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) => {
  // 全てのボタンに共通する基本スタイル
  const baseStyle =
    "px-6 py-2 rounded-full font-semibold text-white shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none";

  // variantごとのスタイルを定義します
  const variantStyles = {
    primary: "bg-indigo-600 hover:bg-indigo-500", // 主要なアクション用
    secondary: "bg-gray-700 hover:bg-gray-600", // その他のアクション用
  };

  // 全てのスタイルクラスを結合します
  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
