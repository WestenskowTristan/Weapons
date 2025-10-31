import React from "react";
import styles from "./weapon-card.module.scss";
import Text from "../Text";

type WeaponCardProps = {
  title?: string;
  ammoType?: string;
};

const WeaponCard = ({ title, ammoType }: WeaponCardProps) => {
  return (
    <div className={styles.weaponCardContainer}>
      <div className={styles.weaponImageContainer}></div>
      <div className={styles.weaponDescriptionContainer}>
        <Text className={styles.weaponTitle} weight="bold" color="white">
          {title}
        </Text>
        <Text className={styles.weaponAmmo} weight="regular" color="white">
          {ammoType}
        </Text>
      </div>
    </div>
  );
};

export default WeaponCard;
