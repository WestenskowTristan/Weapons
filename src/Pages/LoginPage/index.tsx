import React from "react";
import styles from "./login-page.module.scss";
import Text from "../../components/common/Text";
import SearchInput from "../../components/common/SearchInput";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginContainer}>
        <div>
          <Text>Email</Text>
          <SearchInput />
        </div>
        <div>
          <Text>Password</Text>
          <SearchInput />
        </div>
        <Button name="submitButton">Login</Button>
        <Button name="signUp" onClick={() => navigate("/sign-up")}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
