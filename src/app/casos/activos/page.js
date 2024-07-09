"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../casos.module.css"
export default function CasosActivos() {
  const [casos, setCasos] = useState([]);
  useEffect(() => {
    async function fetchCasos() {
      try {
        const response = await fetch("http://localhost:5000/casos");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setCasos(data);
      } catch (error) {
        console.error("Error al obtener los casos:", error);
      }
    }

    fetchCasos();
  }, []);

  return (
    <main>
      <div className={styles.casosActivos}>
            <h1>Casos Activos</h1>
            <table className={styles.casosTable}>
                <thead>
                    <tr>
                        <th>Nombre Paciente</th>
                        <th>Diagnóstico</th>
                        <th>Nombre Prestador</th>
                        <th>Nombre Prestación</th>
                        <th>Fecha de Ocurrencia</th>
                        <th>Fecha de Solicitud</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {casos.map((caso) => (
                        <tr key={caso.IdCaso}>
                            <td>{caso.NombrePaciente}</td>
                            <td>{caso.Diagnostico}</td>
                            <td>{caso.NombrePrestador}</td>
                            <td>{caso.NombrePrestacion}</td>
                            <td>{caso.FechaOcurrencia}</td>
                            <td>{caso.FechaSolicitud}</td>
                            <td><Link href={`/casos/${caso.IdCaso}`}>Ver info</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
  );
}
