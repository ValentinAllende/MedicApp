import React from "react";
import styles from "./TopBar.module.css";
import avatar from "../../assets/dashboard/avatar-test.jpeg";
import menu from "../../assets/dashboard/menu-icon.svg";
import Banner from "../Dashboard/Banner/Banner";

const TopBar = () => {
  return (
    <>
      <section className={styles.RightMenu}>
        <div className={styles.InfoAdmin}>
          <h3 className={styles.Name}>James Ronald</h3>
          <span className={styles.Role}>Admin</span>
        </div>
        <div className={styles.Avatar}>
          <img src={avatar} alt="avatar-admin" />
        </div>
        <img src={menu} alt="menu-icon" className={styles.IconMenu} />
      </section>
     {/*  <Banner/> */}
    </>
  );
};

export default TopBar;
