import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgLogin from "../../imagenes compartidas/login.png";
import NavBar from "../Header/NavBar";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuthContext } from "../../../../context/authContext";
import Google from "./Google/Login";
import Select from "react-select";

const Validate = (input) => {
  let errors = {};
  if (!input.email) errors.email = "El email es obligatorio";
  if (
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email) ===
    false
  )
    errors.email = "Email debe ser de la forma: example@gmail.com";
  if (!input.password) errors.password = "Ingrese una contraseña";
  return errors;
};

export default function Login(email, password) {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "Email requerido",
  });

  const options = [
    { value: "PATIENT", label: "Paciente" },
    { value: "DOCTOR", label: "Doctor" },
    //   { value: 'ADMIN', label: 'Admin' }
  ];

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.replace(/ /g, ""), //quitar espacios
    });
    let errorsResult = Validate({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(errorsResult);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "/auth/signin",
        method: "POST",
        data: input,
      });

      console.log(response.data.data.isActive, "response en login");
      localStorage.setItem("auth-token", JSON.stringify(response.data.token));
      localStorage.setItem("User", JSON.stringify(response.data.data));
      window.localStorage.setItem(
        "Rol",
        JSON.stringify(response.data.data.rol)
      );
      window.localStorage.setItem("isAuth", true);

      setInput({
        email: "",
        password: "",
      });
      if (!response.data.data.isActive) {
        sessionStorage.clear();
        localStorage.clear();
        Swal.fire(
          "Esta cuenta ha sido temporalmente baneada. Por favor comunicate con el adminisrtador o ingresa con otra cuenta"
        );
        return navigate("/");
      } else {
        login();
      }
    } catch (error) {
      Swal.fire(error.response.data.error);
      console.log("error");
    }
  };

  return (
    <div className="h-screen">
      <NavBar avaliable="not" />
      <div>
        <section className="min-h-screen flex">
          <div className="lg:w-1/2 w-full flex items-center justify-center text-center bg-[#292F53] md:px-16 px-0 z-0">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="bg-[#E7EFFD] rounded-[20px] sm:w-2/3 flex flex-col gap-3 p-10 items-center w-full mx-auto"
            >
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-4 text-sm font-poppins rounded-lg bg-white mb-1 shadow-md"
                />
                <div className="h-6 text-xs font-poppins text-red-600 text-start">
                  {errors.email}
                </div>
                <input
                  className="w-full p-4 text-sm font-poppin rounded-lg bg-white mb-1 shadow-md"
                  value={input.password}
                  onChange={(e) => handleChange(e)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <div className="h-6 flex text-xs font-poppins justify-between text-red-600">
                  <div className="">{errors.password}</div>
                  <Link
                    className="text-right text-slate-400 hover:underline hover:text-[#292F53]"
                    to="/forgotPassword"
                  >
                    Olvido su contraseña?
                  </Link>
                </div>
              </div>

              <button className="text-white w-full p-4 font-poppins text-sm rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none ">
                Entrar
              </button>
              <div className="  text-sm rounded-lg flex justify-center font-poppins w-full p-4">
                <h3>
                  Eres paciente?
                  <br /> Inicia sesión con Google
                </h3>
              </div>
              <div className="text-white hover:bg-gray-600 bg-gray-400 text-sm rounded-lg flex justify-center font-poppins w-full p-4">
                <Google login={login} />
              </div>
              <Link
                to="/registerPatient"
                className="text-white w-full p-4 font-poppins text-sm rounded-lg bg-lime-500 hover:bg-lime-600 focus:outline-none"
              >
                <button>Registrate como Paciente</button>
              </Link>
              <Link
                to="/registerDoctor"
                className="text-white w-full p-4 font-poppins text-sm rounded-lg bg-lime-500 hover:bg-lime-600 focus:outline-none"
              >
                {/* <Link to='/doctor'> */}
                <button>Registrate como Doctor</button>
              </Link>
          <Link to="/login/terminos" className="text-indigo-500">Terminos y Condiciones</Link>
            </form>

          </div>
          <div
            className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center z-10"
            style={{ backgroundImage: `url(${imgLogin})` }}
          >
            <div className="absolute bg-blue-400 opacity-10 inset-0  -z-1" />
            <div className="w-full px-20   opacity-60 ">
              <h1 className="text-6xl font-bold text-left text-zinc-500 tracking-wide">
                MediApp
              </h1>
              <p className="text-3xl my-3 text-zinc-500 -mx-6 m-2 -top-8 ">
                Cuidamos tu Salud y La De Tu Familia
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
