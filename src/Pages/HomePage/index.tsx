import React from "react";
import Text from "../../components/common/Text";
import Button from "../../components/common/Button";
import styles from "./home-page.module.scss";
import SearchInput from "../../components/common/SearchInput";

const HomePage = () => {
  return (
    <>
      <div className={styles.homePageContainer}>
        <Text color="white" weight="bold" className={styles.title}>
          WEAPONS
        </Text>
        <div className={styles.listSection}>
          <Text color="white">My Arsinal</Text>
        </div>
        <div className={styles.searchSection}>
          <SearchInput search />
          {/* <Button name="search button" size="small">
          Click here
        </Button> */}
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

export default HomePage;
