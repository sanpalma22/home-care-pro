"use client";
import Link from "next/link";
import styles from "./medico.module.css";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InfoPrestadores() {
  const params = useParams();
  const [prestador, setPrestador] = useState({});
  const [casos, setCasos] = useState([]);
  const router =useRouter();
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
 
  function darBaja() {
    try {
        // Espera la respuesta de la API antes de hacer la redirección
        fetch(`http://localhost:5000/prestadores/baja/${params.medicoId}`, {
            method: 'PUT',
        })
        .then((response) => response.json())
        router.push('/prestadores');
    } catch (error) {
        console.error("Error en la función darbaja  :", error);
    }
}

  return (
    <>
    
    <div className={styles.container}>
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
      <button onClick={darBaja} className={styles.darBaja}>Dar de baja</button>
      </div>
      </div>

      
      {casos.length === 0 ? (
    <p className="textoSinRegistros">No tiene casos asociados</p>
) : (
    <main>
        <div className="mainContainer">
            <h1>Casos asociados</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre Paciente</th>
                        <th>Diagnóstico</th>
                        <th>Fecha de Solicitud</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {casos.map((caso) => (
                        <tr key={caso.IdCaso}>
                            <td>{caso.NombrePaciente}</td>
                            <td>{caso.Diagnostico}</td>
                            <td>{caso.FechaSolicitud.split('T')[0]}</td>
                            <td><Link href={`/casos/${caso.IdCaso}`} className="verInfo">Ver info</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
)}


      </>
  );
}
