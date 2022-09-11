import NavBar from "../../../../Compartido/Componentes/Header/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getProfileDoc } from "../../../../../Redux/actions/doctorActions";
import IconHome from "./iconHome";

import Agenda from "./Agenda";
import Citas from "./citas";
import Perfil from "./Perfil";
import Resenas from "./Resenas";

export default function PanelDoctor() {
  let doctor = useSelector((state) => state.doctores.profile.data);
  //console.log(doctor,'el doctor');
  const [isVisibleAgenda, setisVisibleAgenda] = useState(false);
  const [isVisiblePerfil, setisVisiblePerfil] = useState(true);
  const [isVisibleCitas, setisVisibleCitas] = useState(false);
  const [isVisibleResenas, setisVisibleResenas] = useState(false);
  const [section, setSection] = useState("perfil");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileDoc());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-evenly">
        <div className="w-[200px] bg-[#292F53] px-5 py-[10px] flex h-screen flex-col items-center shadow-2xl">
          <IconHome />
          <hr className="m-2 border-solid border-1 border-white w-2/3"></hr>
          <button
            className="font-poppins text-lg text-white rounded bg-[#1479FF] w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => {
              setSection("perfil");
            }}
          >
            Editar Perfil
          </button>
          <button
            className="font-poppins text-lg text-white rounded bg-[#1479FF] w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => {
              setSection("citas");
            }}
          >
            Citas
          </button>
          <button
            className="font-poppins text-lg text-white rounded bg-[#1479FF] w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => {
              setSection("reseñas");
            }}
          >
            Reseñas
          </button>
          <button
            className="font-poppins text-lg text-white rounded bg-[#1479FF] w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => {
              setSection("agenda");
            }}
          >
            Mi Agenda
          </button>
        </div>

        <div className="w-[calc(100%-200px)] flex flex-col px-10 py-5 gap-5">
          <div className="flex items-center justify-end border-b border-[#292f5333]">
            <img
              src={doctor?.doctor.image}
              className=" w-24 h-24 rounded-full object-cover m-4 border-solid border-2 border-[#1479FF] "
              alt="foto doc"
            />
            <p className="text-[#292F53] text-5xl font-poppins  mt-4">
              Hola{" "}
              <span className="text-[#1479FF]">
                {doctor?.doctor.name.split(" ")[0]}!
              </span>{" "}
            </p>
          </div>

          <div className="border p-5 shadow-md rounded-2xl">
            {section === "perfil" ? (
              <>
                {" "}
                <Perfil />
                <button
                  className="font-poppins text-sm text-white rounded bg-[#1479FF] p-2 mr-3 ml-4 mb-9"
                  onClick={() => {
                    setisVisiblePerfil(!isVisiblePerfil);
                  }}
                >
                  Cerrar{" "}
                </button>
              </>
            ) : null}
            {section === "citas" ? (
              <>
                {" "}
                <Citas />
                <button
                  className="font-poppins text-sm text-white rounded bg-[#1479FF] p-2 mr-3 ml-4 mb-9"
                  onClick={() => {
                    setisVisibleCitas(!isVisibleCitas);
                  }}
                >
                  Cerrar{" "}
                </button>
              </>
            ) : null}
            {section === "agenda" ? (
              <>
                {" "}
                <Agenda />
                <button
                  className="font-poppins text-sm text-white rounded bg-[#1479FF] p-2 mr-3 ml-4 mb-9"
                  onClick={() => {
                    setisVisibleAgenda(!isVisibleAgenda);
                  }}
                >
                  Cerrar{" "}
                </button>
              </>
            ) : null}
            {section === "reseñas" ? (
              <>
                {" "}
                <Resenas />
                <button
                  className="font-poppins text-sm text-white rounded bg-[#1479FF] p-2 mr-3 ml-4 mb-9"
                  onClick={() => {
                    setisVisibleResenas(!isVisibleResenas);
                  }}
                >
                  Cerrar{" "}
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
