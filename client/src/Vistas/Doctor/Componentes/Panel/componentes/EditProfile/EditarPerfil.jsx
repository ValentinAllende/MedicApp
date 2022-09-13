import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDoctor } from "../../../../../../Redux/actions/generalActionsDoctors";

const EditProfile = ({ info, setSection }) => {
  const dispatch = useDispatch();
  let [doctor, setDoctor] = useState(info);
  let id = doctor?.doctor._id;
  let [input, setInput] = useState({
    name: doctor?.doctor.name,
    phoneNumber: doctor?.doctor.phoneNumber,
    address: doctor?.doctor.address,
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
    alert('Edicion exitosa')
  };

  return (
    <div>
      {doctor ? (
        <div>
          <img
            className="font-raleway text-[#292F53] w-28 h-28 ml-4 object-cover -mt-3 rounded-full"
            src={doctor?.doctor.image}
            alt="fotodoc"
          />
          <p className="text-[#1479FF] text-l font-poppins  mt-3 ml-4 mb-4">
            {" "}
            Nombre:
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p className="text-[#1479FF] text-l font-poppins  mt-3 ml-4 mb-4">
            {" "}
            Direccion:
            <input
              type="text"
              name="address"
              value={input.address}
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p className="text-[#1479FF] text-l font-poppins  mt-3 ml-4 mb-4">
            {" "}
            Telefono:
            <input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
          </p>
        </div>
      ) : null}
      <button className="font-poppins text-lg text-white rounded bg-[#1479FF] px-10" onClick={(e) => handleEdit(e)}>Editar</button>
    </div>
  );
};

export default EditProfile;
