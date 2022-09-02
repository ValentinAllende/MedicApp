import React, { useState } from 'react';
import data from '../../../../preguntasFAQ';
import FaqIndividual from './FaqIndividual';
function Faq() {
  const [questions] = useState(data);
  return (
    <main>
      <div>
        <h3 className='font-poppins'> <span className='text-[#292F53]'>Preguntas</span> <span>Frecuentes</span></h3>
        <section>
          {questions.map((question) => {
            return (
              <FaqIndividual key={question.id} {...question}/>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Faq;
