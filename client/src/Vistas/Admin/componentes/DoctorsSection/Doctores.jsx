import React, { useEffect,useState } from "react";
import styles from "./Doctores.module.css";
import iconTitle from "../../assets/ico-dark.png";
import avatarDefault from "../../assets/dashboard/default-avatar.jpg";
import iconAdd from "../../assets/dashboard/add-icon.svg";

import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import Toggle from "../Dashboard/Toggle/Toggle";
import EditDoctor from "./EditDoctor/EditDoctor";
import CreateDoctor from "./CreateDoctor/CreateDoctor";
import { changeStatusDoctor, getDoctor, getDoctors } from "../../../../Redux/actions/generalActionsDoctors";

const Doctores = () => {
  const dispatch = useDispatch();
  const { doctors, detailDoctor } = useSelector((state) => state.generalDoctors);
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
    dispatch(changeStatusDoctor(idPatient));
  };

  /**
   *  @patientToEdit = Método para (dispatch) que edita al paciente
   *  @param => el id del Paciente
   *  @return => no retorna nada
   * */ 
  const patientToEdit = (idPatient) => {
    dispatch(getDoctor(idPatient));
    setForm({...form, edit:true});
  };


  /**
   *  @return => re-render de todos los pacientes y cambia el state edit
   * */
  const reRenderPatients = ()=> {
    dispatch(getDoctors());
    setForm({create:false, edit:false});
  }
 
  /**
   *  @useEffect => todos los pacientes
   * */ 
  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch, form]);

  return (
    <>
      <section className={styles.ContainerPatients}>
        <div className={styles.TitleContainer}>
          <h4 className={styles.ContainerPatientTitle}>
            <img src={iconTitle} alt="alt-img-title-icon" />
            Lista de Doctores en <b>MedicApp</b>
          </h4>
          <button onClick={()=>setForm({edit:false, create:true})}>
            <img src={iconAdd} alt="Icon add" />
            Nuevo Doctor
          </button>
        </div>

        <article className={styles.CardPatientDashboard}>
          <div className={styles.Avatar}></div>
          <h5>Nombre Completo</h5>
          <span className={styles.Email}>Email</span>
          <span className={styles.PhoneNumber}>Ciudad</span>
          <span className={styles.isToggle}>Estado</span>
          <div className={styles.Actions}>
            <span>Acciones</span>
          </div>
        </article>

        {/** @edit => state: habilita el modal para editar un paciente */}
        {form.edit &&
        <Modal>
          <EditDoctor id={detailDoctor._id} 
                      onClick={reRenderPatients}
                      name={detailDoctor.name}
                      email={detailDoctor.email}
                      phoneNumber={detailDoctor.phoneNumber}
                      license={detailDoctor.license}
                      address={detailDoctor.address}/>
        </Modal>
        }

        {/** @create => state: habilita el modal para la creación de un paciente */}
        {form.create &&
        <Modal>
          <CreateDoctor onClick={reRenderPatients} />
        </Modal>
        }

        {/** @return => mapea todos los pacientes en el state patients */}
        { doctors && doctors.map((patient) => {
          return (
            <article className={styles.CardPatientDashboard} key={patient._id}>
              <div className={styles.Avatar}>
                <img src={patient.image || avatarDefault} alt="avatar-img" />
              </div>
              <h5>{patient.name}</h5>
              <span className={styles.Email}>{patient.email}</span>
              <span className={styles.PhoneNumber}>{patient.city}</span>
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

export default Doctores;
