import React from "react";
import styles from "./addition-button.module.scss";
import Button from "../Button";
import Icon from "../Icon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type AdditionButtonProps = {
  className?: string;
};

const AdditionButton = ({ className }: AdditionButtonProps) => {
  return (
    <div>
      <Button
        name="icon"
        variant="icon"
        className={`${className ? className : null} ${styles.plusButton}`}
      >
        <Icon className={styles.plusIcon} icon={faPlus} color="black" />
      </Button>
    </div>
  );
};

export default AdditionButton;
