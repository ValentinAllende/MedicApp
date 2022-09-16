import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDoctor } from "../../../../../../Redux/actions/generalActionsDoctors";
import InputImage from "../../../../../Compartido/Componentes/InputImage/InputImage";
import icon from "../../Assets/ico-dark.png"

const EditProfile = ({ info, setSection }) => {
  const dispatch = useDispatch();
  let [doctor, setDoctor] = useState(info);
  let id = doctor?.doctor._id;
  let [input, setInput] = useState({
    name: doctor?.doctor.name,
    phoneNumber: doctor?.doctor.phoneNumber,
    address: doctor?.doctor.address,
    image: doctor?.doctor.image,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };

  const handleEdit = (e) => {
    dispatch(editDoctor(id, input));
    alert("Edicion exitosa");
  };

  function handleImage(imgUrl) {
    setInput({ ...input, image: imgUrl });
  }

  return (
    <div className="">
      {doctor ? (
        <div className="flex flex-col w-full">
          <p className="flex gap-2 text-[#292F53] text-xl font-poppins mb-5">
            <img src={icon} alt="icon" className="w-7" />
            Editar informacion
          </p>
          <div className="flex flex-col gap-[10px] bg-white rounded-[10px] px-5 py-[20px]">
            <div className="flex flex-col sm:flex-row">
              <p className="w-1/5">Nombre:</p>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
                className="w-full w-4/5 sm:ml-[10px] px-[10px] rounded bg-gray-200 font-raleway"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <p className="w-1/5">Direccion:</p>
              <input
                type="text"
                name="address"
                value={input.address}
                onChange={(e) => handleChange(e)}
                className="w-full w-4/5 sm:ml-[10px] px-[10px] rounded bg-gray-200 font-raleway"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <p className="w-1/5">Telefono:</p>
              <input
                type="text"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={(e) => handleChange(e)}
                className="w-full w-4/5 sm:ml-[10px] px-[10px] rounded bg-gray-200 font-raleway"
              />
            </div>
            <InputImage
              imgUrl={input.image}
              className="flex flex-col-reverse gap-3 mt-3 items-center text-xs xl:flex-row p-4 shadow-md border rounded-lg my-2"
              action={handleImage}
            />
          </div>
          <button
            className="font-poppins text-lg text-white rounded bg-[#292F53] hover:bg-[#1479FF] py-[5px] mt-[10px]"
            onClick={(e) => handleEdit(e)}
          >
            Editar perfil
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default EditProfile;
