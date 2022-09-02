import React, { useState } from 'react';
const FaqIndividual = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? '+': '-'}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default FaqIndividual;

