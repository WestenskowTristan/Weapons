import React from "react";
import styles from "./home-page.module.scss";
import WeaponCard from "../../components/common/WeaponCard";
import SearchInput from "../../components/common/Input";
import AdditionButton from "../../components/common/AdditionButton";
import { useQuery } from "@tanstack/react-query";
import { useWeaponsClient } from "../../data/weapons-data";

const HomePage = () => {
  const weaponsClient = useWeaponsClient();

  const { data } = useQuery({
    queryKey: ["weapon"],
    queryFn: () => weaponsClient.get('5678')
  });

  console.log("data", data);

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
        <WeaponCard title={data?.name} ammoType={data?.ammo} />
        {/* <WeaponCard title="Shotgun" ammoType="Buck Shot" />
        <WeaponCard title="Shotgun" ammoType="Buck Shot" />
        <WeaponCard title="Shotgun" ammoType="Buck Shot" />
        <WeaponCard title="Shotgun" ammoType="Buck Shot" /> */}
      </div>
    </div>
  );
};

export default HomePage;
