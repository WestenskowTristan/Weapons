import React, { useState } from "react";
import styles from "./search-input.module.scss";
import Button from "../Button";

type SearchInputProps = {
  search?: boolean;
};

const SearchInput = ({ search }: SearchInputProps) => {
  const [value, setvalue] = useState("");

  const handleChange = (event: any) => {
    setvalue(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        id="searchInput"
        value={value}
        type="text"
        onChange={handleChange}
      />
      {search ? (
        <Button name="search button" size="small">
          SEARCH
        </Button>
      ) : null}
    </div>
  );
};

export default SearchInput;
