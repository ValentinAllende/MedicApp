import React, { useEffect,useState } from "react";
import moment from "moment";
import styles from "./Admins.module.css";
import iconTitle from "../../assets/ico-dark.png";
import avatarDefault from "../../assets/dashboard/default-avatar.jpg";
import iconAdd from "../../assets/dashboard/add-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { getAdmins, changeStatusAdmin, getAdmin } from "../../../../Redux/actions/generalActionsAdmins";
import Modal from "../Modal/Modal";
import Toggle from "../Dashboard/Toggle/Toggle";
import EditAdmin from "./EditAdmin/EditAdmin";
import CreateAdmin from "./CreateAdmin/CreateAdmin";
import DetailAdmin from "./DetailAdmin/DetailAdmin";

const Admins = () => {
  const dispatch = useDispatch();
  const { admins, detailAdmin } = useSelector((state) => state.generalAdmins);
  const [form, setForm] = useState({
    edit: false,
    create: false,
    detail: false
  });
  /**
   *  @changeStatus = Método para (dispatch) que cambia el estado del admin (Activo o Inactivo)
   *  @param => el id del Paciente
   *  @return => no retorna nada
   * */ 
  const changeStatus = (idAdmin, enable) => {
    dispatch(changeStatusAdmin(idAdmin, enable));
  };

  /**
   *  @adminToEdit = Método para (dispatch) que edita al admin
   *  @param => el id del Admin
   *  @return => no retorna nada
   * */ 
/*   const adminToEdit = (idAdmin) => {
    dispatch(getAdmin(idAdmin));
    setForm({...form, edit:true});
  };
 */
   /**
   *  @adminDetail = Método para (dispatch) que ver el detalle del admin
   *  @param => el id del Admin
   *  @return => no retorna nada
   * */ 
    const adminDetail = (idAdmin) => {
      dispatch(getAdmin(idAdmin));
      setForm({...form, detail:true});
    };

  /**
   *  @return => re-render de todos los admins y cambia el state
   * */
  const reRenderAdmins = ()=> {
    dispatch(getAdmins());
    dispatch(getAdmin());
    setForm({create:false, edit:false, detail: false});
  }
 
  /**
   *  @useEffect => todos los admins
   * */ 
  useEffect(() => {
    dispatch(getAdmins());
  }, [dispatch, form]);

  return (
    <>
      <section className={styles.ContainerPatients}>
        <div className={styles.TitleContainer}>
          <h4 className={styles.ContainerPatientTitle}>
            <img src={iconTitle} alt="alt-img-title-icon" />
            Lista de Admins en <b>MedicApp</b>
          </h4>
          <button onClick={()=>setForm({edit:false, create:true})}>
            <img src={iconAdd} alt="Icon add" />
            Nuevo Admin
          </button>
        </div>

        <article className={styles.CardPatientDashboard}>
          <div className={styles.Avatar}></div>
          <h5>Nombre Completo</h5>
          <span className={styles.Email}>Email</span>
          <span className={styles.Id}>ID</span>
          <span className={styles.Actions}>Creacion</span>
          <span className={styles.isToggle}>Estado</span>
          
        </article>

        {/** @edit => state: habilita el modal para editar un admin */}
        {form.edit &&
        <Modal>
          <EditAdmin id={detailAdmin._id} onClick={reRenderAdmins} name={detailAdmin.name} email={detailAdmin.email} phoneNumber={detailAdmin.phoneNumber}/>
        </Modal>
        }

        {/** @detail => state: habilita el modal para ver detalle de admin */}
        {form.detail &&
        <Modal>
          <DetailAdmin admin={detailAdmin} 
                      onClick={reRenderAdmins}
                      />
        </Modal>
        }

        {/** @create => state: habilita el modal para la creación de un admin */}
        {form.create &&
        <Modal>
          <CreateAdmin onClick={reRenderAdmins} />
        </Modal>
        }

        {/** @return => mapea todos los pacientes en el state admins */}
        { admins && admins.map((admin) => {
          return (
            <article className={styles.CardPatientDashboard} key={admin._id}>
              <div className={styles.Avatar}>
                <img src={admin.image || avatarDefault} alt="avatar-img" />
              </div>
              <h5 onClick={() => adminDetail(admin._id)}>{admin.name}</h5>
              <span className={styles.Email}>{admin.email}</span>
              <span className={styles.Id}>{admin._id}</span>
              <span className={styles.Actions}>{moment(admin.createdAt).utc().format('MM/DD/YYYY')}</span>
              <div className={styles.isToggle}>
                <Toggle isToggle={admin.active ? true : false} onToggle={() => changeStatus(admin._id, !admin.active)}/>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Admins;
