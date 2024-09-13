"use client";
import styles from "./devolucionAcord.module.css"
import { useState } from 'react';

export default function DevolucionAcord({devolucion,index}) {
    const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  

  return (
    <div key={devolucion.id} className={styles.accordionItem}>
          <button
            className={`${styles.accordionButton} ${
              openIndex === index ? styles.active : ''
            }`}
            onClick={() => handleToggle(index)}
          >
            Dia {index+1} : {devolucion.Fecha}
          </button>
          {openIndex === index && (
            <div className={styles.accordionContent}>
              <p>{devolucion.Descripcion}</p>
            </div>
          )}
        </div>
  );
};

