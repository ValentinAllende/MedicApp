import React, {useState} from "react";
import styles from "./EditAdmin.module.css";
import iconClose from "../../../assets/dashboard/close-icon.svg";
import iconInput from "../../../assets/dashboard/input-icon.svg";
import { useDispatch } from "react-redux";
/* import { editAdmin } from "../../../../../Redux/actions/generalActionsAdmins"; */

const EditAdmin = ({id, onClick, name, email}) => {
  const dispatch = useDispatch();

  const initialInputs = {
    name: "",
    email: "",
    phoneNumber: ""
  };

  const [input, setInput] = useState(initialInputs);
  const [inputErrors, setInputErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setInputErrors(
      validateInput({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };


    /** Basic Regex for Validate Inputs */
    const noEmpty = /\S+/;
    const validateText = /^(?=.*?[A-Za-z])[A-Za-z+\s]+$/;
    const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  
    const validateInput = (input) => {
      let errors = {};
      if (
        !noEmpty.test(input.name) ||
        !validateText.test(input.name) ||
        input.name.length < 4
      ) {
        errors.name = "Solo se permiten letras.";
      }
      if (
        !noEmpty.test(input.email) ||
        !validateEmail.test(input.email)
      ) {
        errors.email = "Formato de email incorrecto";
      }
      if (
        !noEmpty.test(input.phoneNumber)
      ) {
        errors.phoneNumber = "Formato de teléfono incorrecto";
      }
      return errors;
    };

  const handleSubmit = async (e) => {
    console.log(id);
    e.preventDefault();
    if (
      !inputErrors.name &&
      !inputErrors.email &&
      !inputErrors.phoneNumber 
    ) {
/*       dispatch(editAdmin(id,input)); */
      setInput(initialInputs);
      onClick();
    } else {
      console.log("error");
    }
  };

  
  return (
    <form className={styles.Form} onSubmit={(e) => {handleSubmit(e);}}>
          <img src={iconClose} alt="alt-close-icon" className={styles.ButtonClose} onClick={onClick}/>
          <h2 className={styles.TitleModal}>Editar Admin</h2>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.name ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.name}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Nombre:</label>
            <input
              className={styles.Input}
              type="text"
              name="name"
              placeholder={name}
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.email ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.email}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Email:</label>
            <input
              className={styles.Input}
              type="text"
              name="email"
              placeholder={email}
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
      
      <button className={styles.ButtonSubmit} type="submit">
        Editar Admin
      </button>

    </form>
  );
};

export default EditAdmin;
