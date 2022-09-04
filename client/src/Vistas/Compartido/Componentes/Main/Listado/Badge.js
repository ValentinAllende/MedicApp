import React from "react";

export default function DoctorBadge({id, name, specialties, address, phoneNumber}) {
  return (
    <div className="doctor-list-badge" key={id}>
      <h3>{name}</h3>
      <h4>{specialties}</h4>
      <div>
        <span>{address}</span> {/*Display block */}
        <span>{phoneNumber}</span>
      </div>
    </div>
  );
}
