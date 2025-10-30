import React, { useState } from "react";
import styles from "./input.module.scss";
import Button from "../Button";

type SearchInputProps = {
  search?: boolean;
  className?: string;
  placeholder?: string;
};

const Input = ({ search, className, placeholder }: SearchInputProps) => {
  const [value, setvalue] = useState("");

  const handleChange = (event: any) => {
    setvalue(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        id="input"
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={handleChange}
        className={`${className ? className : ""} ${styles.input}`}
      />
      {search ? (
        <Button name="search button" size="small">
          SEARCH
        </Button>
      ) : null}
    </div>
  );
};

export default Input;
