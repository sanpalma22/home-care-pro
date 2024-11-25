"use client";
import styles from "./medico.module.css";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function InfoPrestadores() {
  const params = useParams();
  const [prestador, setPrestador] = useState({});
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    async function fetchPrestador() {
      try {
        const response = await fetch(`http://localhost:5000/prestadores/${params.medicoId}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos del prestador");
        }
        const data = await response.json();
        setPrestador(data[0]);
      } catch (error) {
        console.error("Error al obtener el prestador:", error);
      }
    }

    async function fetchCasos() {
      try {
        const response = await fetch(`http://localhost:5000/medicos/${params.medicoId}`);
        if (!response.ok) {
          throw new Error("Error al obtener los casos");
        }
        const data = await response.json();
        setCasos(data);
      } catch (error) {
        console.error("Error al obtener los casos:", error);
      }
    }

    fetchPrestador();
    fetchCasos();
  }, [params.medicoId]);

  return (
    <>
    
    <div className={styles.container}>
      {/* Información del prestador */}
      <div className={styles.infoCard}>
        <h2>Información del Prestador</h2>
        <div className={styles.infoSection}>
          <p className={styles.label}>Nombre:</p>
          <p className={styles.value}>{prestador.Nombre}</p>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.label}>Apellido:</p>
          <p className={styles.value}>{prestador.Apellido}</p>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.label}>Especialidad:</p>
          <p className={styles.value}>{prestador.Especialidad}</p>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.label}>DNI:</p>
          <p className={styles.value}>{prestador.Dni}</p>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.label}>Dirección:</p>
          <p className={styles.value}>{prestador.Direccion}</p>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.label}>Localidad:</p>
          <p className={styles.value}>{prestador.Localidad}</p>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.label}>Teléfono:</p>
          <p className={styles.value}>{prestador.Telefono}</p>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.label}>Email:</p>
          <p className={styles.value}>{prestador.Email}</p>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.label}>Género:</p>
          <p className={styles.value}>{prestador.Genero}</p>
        </div>
      </div>
      </div>

      
      <div className={styles.casosCard}>
        <h2>Casos Asociados</h2>
        {casos.length > 0 ? (
          casos.map((caso) => (
            <div key={caso.IdCaso} className={styles.casoItem}>
              <div className={styles.infoSection}>
                <p className={styles.label}>ID Caso:</p>
                <p className={styles.value}>{caso.IdCaso}</p>
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
                <p className={styles.value}>{caso.FechaSolicitud}</p>
              </div>
              <div className={styles.infoSection}>
                <p className={styles.label}>En Curso:</p>
                <p className={styles.value}>{caso.EnCurso ? "Sí" : "No"}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay casos asociados para este prestador.</p>
        )}
      </div>
      </>
  );
}
