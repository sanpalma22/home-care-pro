"use client";
import Link from "next/link";
import styles from "./caso.module.css"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Caso() {
  const [caso, setCaso] = useState({});
  const params = useParams()

  useEffect(() => {
    async function fetchCaso() {
      try {
        const response = await fetch(`http://localhost:5000/casos/${params.casoId}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setCaso(data[0]);
      } catch (error) {
        console.error("Error al obtener el caso:", error);
      }
    }

    fetchCaso();
  }, [caso]);

  
  return (
    <div className={styles.infoCaso}>
      <div className={styles.infoSection}>
        <p className={styles.label}>Paciente:</p>
        <p className={styles.value}>{caso.NombrePaciente}</p>
      </div>
      <div className={styles.infoSection}>
        <p className={styles.label}>Prestador:</p>
        <p className={styles.value}>{caso.NombrePrestador}</p>
      </div>
      <div className={styles.infoSection}>
        <p className={styles.label}>Prestación:</p>
        <p className={styles.value}>{caso.NombrePrestacionX}</p>
      </div>
      <div className={styles.infoSection}>
        <p className={styles.label}>Diagnóstico:</p>
        <p className={styles.value}>{caso.Diagnostico}</p>
      </div>
      <div className={styles.infoSection}>
        <p className={styles.label}>Fecha de Ocurrencia:</p>
        <p className={styles.value}>{caso.FechaOcurrencia}</p>
      </div>
      <div className={styles.infoSection}>
        <p className={styles.label}>Fecha de Solicitud:</p>
        {/* <p className={styles.value}>{caso.FechaSolicitud.split('T')[0]}</p> */}
      </div>
      <div className={styles.btnContainer}>

        <Link className="btnIngresar" href={`/casos/${caso.IdCaso}/devolucion`}>
          Ver devoluciones
        </Link>
      </div>
    </div>
  );
  
};


