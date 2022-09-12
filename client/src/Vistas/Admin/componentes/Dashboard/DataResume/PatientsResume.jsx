import React from "react";
import styles from "./DataResume.module.css";
import { useSelector } from "react-redux";
import avatarDefault from "../../../assets/dashboard/default-avatar.jpg";
import { useDispatch } from "react-redux";
import { changeSectionDashboard } from "../../../../../Redux/actions/generalActionsAdmins";

const PatientsResume = ({avatar, iconTitle, iconActive, iconInactive}) => {

  const {patients} = useSelector((state) => state.generalPatients);
  const dispatch = useDispatch();

  const changeSection= (section) =>{
    dispatch(changeSectionDashboard(section));
  }

  return (
    <section className={styles.ContainerPatients}>
      <div className={styles.TitleContainer}>
        <h4 className={styles.ContainerPatientTitle}>
          <img src={iconTitle} alt="alt-img-title-icon" />
          Nuevos Pacientes en <b>MedicApp</b>
        </h4>
        <button  onClick={()=>changeSection("Pacientes")}>Ver Todos</button>
      </div>
      {patients &&
        patients.slice(patients.length - 6, patients.length - 1).map((patient) => {
          return (
            <article className={styles.CardDoctorDashboard} key={patient._id}>
              <div className={styles.Avatar}>
                <img src={patient.image || avatarDefault} alt="avatar-img" />
              </div>
              <h5>{patient.name}</h5>
              <span className={styles.Email}>{patient.email}</span>
              <span className={patient.active ? styles.isActive :styles.isInactive}>
                <img src={patient.active ? iconActive :iconInactive} alt="icon-status" /> {patient.active ? "Active" : "Inactive" }
              </span>
            </article>
          );
        })}
    </section>
  );
};

export default PatientsResume;
