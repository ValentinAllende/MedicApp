import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../Compartido/Componentes/Header/NavBar";
import InputImage from "../../../Compartido/Componentes/InputImage/InputImage";

export default function CreatePatient() {
  const navigate = useNavigate();
  const [inputErrors, setInputErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    rpassword: "",
    image: "https://180dc.org/wp-content/uploads/2016/08/default-profile.png",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setInputErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(inputErrors);
  }

  function validate(input) {
    let errors = {};
    if (!input.name) errors.name = "Ingrese un nombre.";
    if (!input.phoneNumber)
      errors.phoneNumber = "Ingrese un numero de telefono.";
    if (!input.email) errors.email = "Ingrese un Email.";
    if (!input.password) errors.password = "Ingrese una contraseña.";
    if (!/^[0-9]+$/.test(input.phoneNumber))
      errors.phoneNumber = "Solo puede contener numeros.";
    if (
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email) ===
      false
    )
      errors.email = "Formato incorrecto";
    if (input.password.length < 8) {
      errors.password = "Se requieren al menos 8 caracteres.";
    }
    if (input.rpassword !== input.password)
      errors.rpassword = "Las contraseñas no coinciden";
    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/patients", {
        name: input.name,
        phoneNumber: input.phoneNumber,
        email: input.email,
        password: input.password,
        image: input.image,
      });
      console.log(res);
      if (res.status === 201) {
        alert("Usted se a registrado");
        navigate("/");
      }
    } catch (e) {
      console.log(e.toJSON());
    }
  }

  function handleImage(imgUrl) {
    setInput({ ...input, image: imgUrl });
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center lg:py-10">
        <form
          className="w-full font-poppins text-sm bg-white flex flex-col rounded-lg p-10 lg:w-1/2 text-[#292F53]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required={true}
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.name}
          </div>

          <label>Numero de telefono:</label>
          <input
            type="text"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required={true}
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.phoneNumber}
          </div>

          <label>Imagen o Foto de Perfil:</label>
          <InputImage
            action={handleImage}
            imgUrl={input.image}
            className="flex flex-col-reverse gap-3 mt-3 items-center text-xs xl:flex-row p-4 shadow-md border rounded-lg my-2"
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
          </div>

          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 font-poppins rounded-lg bg-white my-2 shadow-md border"
            required={true}
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.email}
          </div>

          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required={true}
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.password}
          </div>

          <label>Repita su contraseña:</label>
          <input
            type="password"
            name="rpassword"
            value={input.rpassword}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 text-sm font-poppins rounded-lg bg-white my-2 shadow-md border"
            required={true}
          />
          <div className="h-3 text-xs font-poppins text-red-600 text-end">
            {inputErrors.rpassword}
          </div>

          <button
            type="submit"
            className="text-white w-full p-4 font-poppins text-sm rounded-lg mt-5 bg-[#292F53] hover:bg-[#1479FF] focus:outline-none "
          >
            Registrarme
          </button>
        </form>
      </div>
    </>
  );
}
