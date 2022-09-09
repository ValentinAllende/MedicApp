import React, { useEffect,useState } from "react";
import styles from "./Patients.module.css";
import iconTitle from "../../assets/ico-dark.png";
import avatarDefault from "../../assets/dashboard/default-avatar.jpg";
import iconAdd from "../../assets/dashboard/add-icon.svg";

import { useSelector, useDispatch } from "react-redux";
import { getPatients, changeStatusPatient, getPatient } from "../../../../Redux/actions/generalActionsPatients";
import Modal from "../Modal/Modal";
import Toggle from "../Dashboard/Toggle/Toggle";
import EditPatient from "./EditPatient/EditPatient";
import CreatePatient from "./CreatePatient/CreatePatient";

const Patients = () => {
  const dispatch = useDispatch();
  const { patients, detailPatient } = useSelector((state) => state.generalPatients);
  const [form, setForm] = useState({
    edit: false,
    create: false
  });
  /**
   *  @changeStatus = Método para (dispatch) que cambia el estado del paciente (Activo o Inactivo)
   *  @param => el id del Paciente
   *  @return => no retorna nada
   * */ 
  const changeStatus = (idPatient) => {
    console.log(idPatient);
    dispatch(changeStatusPatient(idPatient));
  };

  /**
   *  @patientToEdit = Método para (dispatch) que edita al paciente
   *  @param => el id del Paciente
   *  @return => no retorna nada
   * */ 
  const patientToEdit = (idPatient) => {
    dispatch(getPatient(idPatient));
    setForm({...form, edit:true});
  };


  /**
   *  @return => re-render de todos los pacientes y cambia el state edit
   * */
  const reRenderPatients = ()=> {
    dispatch(getPatients());
    setForm({create:false, edit:false});
  }
 
  /**
   *  @useEffect => todos los pacientes
   * */ 
  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch, form]);

  return (
    <>
      <section className={styles.ContainerPatients}>
        <div className={styles.TitleContainer}>
          <h4 className={styles.ContainerPatientTitle}>
            <img src={iconTitle} alt="alt-img-title-icon" />
            Lista de Pacientes en <b>MedicApp</b>
          </h4>
          <button onClick={()=>setForm({edit:false, create:true})}>
            <img src={iconAdd} alt="Icon add" />
            Nuevo Paciente
          </button>
        </div>

        <article className={styles.CardPatientDashboard}>
          <div className={styles.Avatar}></div>
          <h5>Nombre Completo</h5>
          <span className={styles.Email}>Email</span>
          <span className={styles.PhoneNumber}>Teléfono</span>
          <span className={styles.isToggle}>Estado</span>
          <div className={styles.Actions}>
            <span>Acciones</span>
          </div>
        </article>

        {/** @edit => state: habilita el modal para editar un paciente */}
        {form.edit &&
        <Modal>
          <EditPatient id={detailPatient._id} onClick={reRenderPatients} name={detailPatient.name} email={detailPatient.email} phoneNumber={detailPatient.phoneNumber}/>
        </Modal>
        }

        {/** @create => state: habilita el modal para la creación de un paciente */}
        {form.create &&
        <Modal>
          <CreatePatient onClick={reRenderPatients} />
        </Modal>
        }

        {/** @return => mapea todos los pacientes en el state patients */}
        { patients && patients.map((patient) => {
          return (
            <article className={styles.CardPatientDashboard} key={patient._id}>
              <div className={styles.Avatar}>
                <img src={patient.image || avatarDefault} alt="avatar-img" />
              </div>
              <h5>{patient.name}</h5>
              <span className={styles.Email}>{patient.email}</span>
              <span className={styles.PhoneNumber}>{patient.phoneNumber}</span>
              <div className={styles.isToggle}>
                <Toggle isToggle={patient.active ? true : false} onToggle={() => changeStatus(patient._id)}/>
              </div>
              <div className={styles.Actions}>
                <button className={styles.ButtonEdit} onClick={()=>patientToEdit(patient._id)}>Editar</button>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Patients;
