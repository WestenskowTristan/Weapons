import React from "react";
import styles from "./home-page.module.scss";
import WeaponCard from "../../components/common/WeaponCard";
import SearchInput from "../../components/common/Input";
import AdditionButton from "../../components/common/AdditionButton";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.searchContainer}>
        <SearchInput
          className={styles.searchInput}
          placeholder="Search Your Arsenal"
        />
        <AdditionButton className={styles.additionButton} />
      </div>
      <div className={styles.contentContainer}>
        <WeaponCard title="Shotgun" ammoType="Buck Shot" />
        <WeaponCard title="Shotgun" ammoType="Buck Shot" />
        <WeaponCard title="Shotgun" ammoType="Buck Shot" />
        <WeaponCard title="Shotgun" ammoType="Buck Shot" />
        <WeaponCard title="Shotgun" ammoType="Buck Shot" />
      </div>
    </div>
  );
};

export default HomePage;
