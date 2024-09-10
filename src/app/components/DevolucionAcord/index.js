"use client";

import { useState } from 'react';

export default function DevolucionAcord() {
    const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    { id: 1, title: 'Devolución 1', content: 'Contenido de Devolución 1' },
    { id: 2, title: 'Devolución 2', content: 'Contenido de Devolución 2' },
    { id: 3, title: 'Devolución 3', content: 'Contenido de Devolución 3' },
  ];

  return (
    <div>
      {accordionData.map((item, index) => (
        <div>
          <button onClick={() => handleToggle(index)}>
            {openIndex === index ? 'Cerrar' : 'Más info'}
          </button>
          {openIndex === index && (
            <div>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
