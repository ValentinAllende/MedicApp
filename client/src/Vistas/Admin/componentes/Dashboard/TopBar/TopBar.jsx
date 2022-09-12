import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TopBar.module.css";
import avatar from "../../../assets/dashboard/avatar-test.jpeg";
import menu from "../../../assets/dashboard/menu-icon.svg";
import Banner from "../../Dashboard/Banner/Banner";
import { useEffect } from "react";

const TopBar = () => {

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const onClickMenu = () => {
    setToggle(!toggle);
  };
  const logOut = () => {
    localStorage.clear()
    navigate('/login')
  };  

  const dataAdmin = JSON.parse(window.localStorage.getItem('User'));

  useEffect(()=>{
    console.log(dataAdmin);

  },[])

  return (
    <>
      <section className={styles.RightMenu}>
        <div className={styles.InfoAdmin}>
          <h3 className={styles.Name}>{dataAdmin.email}</h3>
          <span className={styles.Role}>{dataAdmin.rol}</span>
        </div>
        <div className={styles.Avatar}>
          <img src={avatar} alt="avatar-admin" />
        </div>
        <div className={styles.Dropdown} >
          <img src={menu} alt="menu-icon" className={styles.IconMenu} onClick={(e) => onClickMenu(e)} />
          <ul className={toggle ?`${styles.Menu} ${styles.MenuOpen}`: styles.Menu}>
            <li><Link to="/">Inicio</Link></li>
            <li>Configuración</li>
            <li onClick={(e)=>logOut(e)}>Cerrar Sesión</li>
          </ul>
        </div>
        
      </section>
     {/*  <Banner/> */}
    </>
  );
};

export default TopBar;
