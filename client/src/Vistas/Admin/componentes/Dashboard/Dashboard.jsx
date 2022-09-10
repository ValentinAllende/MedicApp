import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../TopBar/TopBar";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import styles from "./Dashboard.module.css";
import CardResume from "./CardResume/CardResume";
import DataResume from "./DataResume/DataResume";
import Patients from "../PatientsSection/Patients";
import Doctores from "../DoctorsSection/Doctores";
import Admins from "../AdminsSection/Admins";
import { getDoctors } from "../../../../Redux/actions/generalActionsDoctors";
import { getPatients } from "../../../../Redux/actions/generalActionsPatients";


const Dashboard = () => {
  const dispatch = useDispatch();
  const {changeSection} = useSelector((state) => state.generalAdmins);

  /**
   *  @useEffect => todos los pacientes
   * */ 
   useEffect(() => {
    dispatch(getDoctors());
    dispatch(getPatients());
  }, [dispatch]);


  return (
    <main className={styles.MainContainer}>
      <section className={styles.MenuContainer}>
        <NavbarAdmin/>
      </section>
      <section className={styles.ContentContainer}>
        <TopBar />
        {changeSection === "Dashboard" &&
          <>
            <CardResume/>
            <DataResume/>
          </>
        }
        {changeSection === "Pacientes" &&
          <>
            <Patients/>
          </>
        }
        {changeSection === "Doctores" &&
          <>
            <Doctores/>
          </>
        }
        {changeSection === "Admins" &&
          <>
            <Admins/>
          </>
        }
        {changeSection === "Citas" &&
          <>
            <Patients/>
          </>
        }
        {changeSection === "Comentarios" &&
          <>
            <Patients/>
          </>
        }
      </section>
    </main>
  );
};

export default Dashboard;
