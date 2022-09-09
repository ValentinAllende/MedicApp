import React from 'react';
import styles from "./CardResume.module.css";
import icon from "../../../assets/dashboard/user-icon.svg";
import iconDoctor from "../../../assets/dashboard/doctor-icon.svg";
import iconDate from "../../../assets/dashboard/date-icon.svg";
import iconComment from "../../../assets/dashboard/comment-icon.svg";
import {useSelector} from "react-redux";
const CardResume = () => {

  const {doctors} = useSelector((state) => state.generalDoctors);
  const {patients} = useSelector((state) => state.generalPatients);

  return (
    <div className={styles.Container}>
      {console.log(doctors)}
      <section className={styles.ContainerCard}>
        <div className={styles.CardText}>
          <h3>Pacientes Totales</h3>
          <span>{patients.length || 0} </span>
        </div>
        <img src={icon} alt="img-icon-total" className={styles.CardIcon} />
      </section>
      <section className={styles.ContainerCard}>
        <div className={styles.CardText}>
          <h3>Doctores Totales</h3>
          <span>{doctors.length || 0} </span>
        </div>
        <img src={iconDoctor} alt="img-icon-total" className={styles.CardIcon} />
      </section>
      <section className={styles.ContainerCard}>
        <div className={styles.CardText}>
          <h3>Citas Confirmadas</h3>
          <span>8,685</span>
        </div>
        <img src={iconDate} alt="img-icon-total" className={styles.CardIcon} />
      </section>
      <section className={styles.ContainerCard}>
        <div className={styles.CardText}>
          <h3>Comentarios</h3>
          <span>1,685</span>
        </div>
        <img src={iconComment} alt="img-icon-total" className={styles.CardIcon} />
      </section>
    </div>
  )
}

export default CardResume;