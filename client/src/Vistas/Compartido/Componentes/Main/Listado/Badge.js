import React from "react";

export default function DoctorBadge(id, name, specialties, rating, address) {
  return (
    <div className="doctor-list-badge" key={id}>
      <h3>{name}</h3>
      <h4>{specialties}</h4>
      <div>
        <span>{rating}</span> {/*Display block */}
        <span>{address}</span> {/*Display block */}
      </div>
    </div>
  );
}
