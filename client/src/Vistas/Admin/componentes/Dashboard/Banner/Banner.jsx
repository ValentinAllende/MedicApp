import React from 'react';
import styles from "./Banner.module.css";
import { useSelector } from 'react-redux';

const Banner = () => {
  const {changeSection} = useSelector((state) => state.generalAdmins);
  return (
    <section className={`${styles[changeSection]} ${styles.ContainerBanner}`}>
      <h2>{changeSection === "Dashboard" ? `Bienvenido al Dashboard de Administración` : `Bienvenido al Dashboard de ${changeSection}`}</h2>
    </section>
  )
}

export default Banner;