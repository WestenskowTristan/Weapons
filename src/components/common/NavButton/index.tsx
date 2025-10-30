import React from "react";
import styles from "./nav-button.module.scss";
import Text from "../Text";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

type NavButtonProps = {
  text: string;
  route: string;
};

const NavButton = ({ text, route }: NavButtonProps) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(route);
  };

  return (
    <Button
      name="navButton"
      className={styles.navButtonContainer}
      onClick={handleNavigation}
    >
      <Text>{text}</Text>
    </Button>
  );
};

export default NavButton;
