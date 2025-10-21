import React, { ReactNode } from 'react';
import styles from './text.module.scss';

type TextProps = {
  children: ReactNode;
  className?: string;
  color?: "black" | "white" | "grey" | "blue" | "purple" | "green" | "red" | "warning";
  weight?: "regular" | "medium" | "semiBold" | "bold";
};


const Text = ({
  children,
  className,
  weight,
  color,
}: TextProps) => {
  return (
    <span className={`
      ${styles.text}
      ${className ? className : ""} 
      ${weight ? styles[weight] : ""}
      ${color ? styles[color] : ""}
    `}>
      {children}
    </span>
  );
};

export default Text;