import React from "react";
import styles from "./sign-up.module.scss";
import Text from "../../components/common/Text";
import SearchInput from "../../components/common/SearchInput";
import Button from "../../components/common/Button";

const SignUp = () => {
  return (
    <div className={styles.signUpPageContainer}>
      <div className={styles.signUpContainer}>
        <div>
          <Text>First Name</Text>
          <SearchInput />
        </div>
        <div>
          <Text>Last Name</Text>
          <SearchInput />
        </div>
        <div>
          <Text>Email</Text>
          <SearchInput />
        </div>
        <div>
          <Text>Password</Text>
          <SearchInput />
        </div>
        <Button name="sumbit">Submit</Button>
      </div>
    </div>
  );
};

export default SignUp;
