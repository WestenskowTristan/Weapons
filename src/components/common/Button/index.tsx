import { ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  variant?: "black" | "grey" | "blue" | "green" | "red" | "dark" | "icon";
  size?: "large" | "medium" | "mid-medium" | "modal" | "small";
  href?: string;
  fullWidth?: boolean;
  targetBlank?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  name: string; 
};

const Button = ({
  children,
  className,
  variant = "blue",
  size = "medium",
  fullWidth,
  onClick,
  disabled,
  name,
}: ButtonProps) => {
  const btnClass = `
    ${styles.buttonBase}
    ${fullWidth ? styles.fullWidth : ""}
    ${disabled ? styles.disabled : ""}
    ${className ? className : ""} 
    ${variant ? styles[variant] : ""}
    ${size ? styles[size] : ""}
  `;

  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        if (!!onClick) onClick();
      }}
      className={btnClass}
      name={name}
    >
      {children}
    </button>
  );
};

export default Button;
