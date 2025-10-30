import React from "react";
import styles from "./navigation.module.scss";
import AdditionButton from "../AdditionButton";
import NavButton from "../NavButton";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navigationContainer}>
      <AdditionButton />
      <NavButton text="Home" route="/"/>
      <NavButton text="Trade" route="/login"/>
      <NavButton text="Shop" route="/sign-up"/>
      <div className={styles.logoutButtonContainer}>
        <NavButton text="Logout" route="/"/>
      </div>
    </div>
  );
};

export default Navigation;
