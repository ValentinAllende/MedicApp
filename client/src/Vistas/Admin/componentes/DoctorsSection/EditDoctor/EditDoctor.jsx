import React, {useState} from "react";
import styles from "./EditDoctor.module.css";
import iconClose from "../../../assets/dashboard/close-icon.svg";
import iconInput from "../../../assets/dashboard/input-icon.svg";
import { useDispatch } from "react-redux";
import { editDoctor } from "../../../../../Redux/actions/generalActionsDoctors";

const EditDoctor = ({id, onClick, name, email, phoneNumber, license, address}) => {
  const dispatch = useDispatch();

  const initialInputs = {
    name: "",
    email: "",
    phoneNumber: "",
    license: "",
    address: ""
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
      if (
        !noEmpty.test(input.license)
      ) {
        errors.license = "Campo Licencia no puede estar vacia";
      }
      if (
        !noEmpty.test(input.address)
      ) {
        errors.license = "Campo Dirección no puede estar vacio";
      }
      return errors;
    };

  const handleSubmit = async (e) => {
    console.log(id);
    e.preventDefault();
    if (
      !inputErrors.name &&
      !inputErrors.email &&
      !inputErrors.phoneNumber &&
      !inputErrors.license &&
      !inputErrors.address 
    ) {
      dispatch(editDoctor(id,input));
      setInput(initialInputs);
      onClick();
    } else {
      console.log("error");
    }
  };

  return (
    <form className={styles.Form} onSubmit={(e) => {handleSubmit(e);}}>
          <img src={iconClose} alt="alt-close-icon" className={styles.ButtonClose} onClick={onClick}/>
          <h2 className={styles.TitleModal}>Editar Doctor</h2>
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
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.phoneNumber ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.phoneNumber}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Teléfono:</label>
            <input
              className={styles.Input}
              type="text"
              name="phoneNumber"
              placeholder={phoneNumber}
              value={input.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.license ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.license}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Licencia Médica:</label>
            <input
              className={styles.Input}
              type="text"
              name="license"
              placeholder={license}
              value={input.license}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.address ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.address}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Dirección de Consulta:</label>
            <input
              className={styles.Input}
              type="text"
              name="address"
              placeholder={address}
              value={input.address}
              onChange={(e) => handleChange(e)}
            />
          </div>
          
      <button className={styles.ButtonSubmit} type="submit">
        Editar Doctor
      </button>

    </form>
  );
};

export default EditDoctor;