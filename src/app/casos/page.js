"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Casos() {
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
      <div>
        <h1>Casos Activos</h1>
        <ul>
          {casos.map((caso) => (
            <div key={caso.IdCaso}>
              <p>Nombre: {caso.NombrePaciente}</p>
              <p>Diagnostico: {caso.Diagnostico}</p>
              <p>Nombre prerstador: {caso.NombrePrestador}</p>
              <p>{caso.NombrePrestacion}</p>
              <p>Fecha de lo ocurrido: {caso.FechaOcurrencia}</p>
              <p>Fecha de solicitud: {caso.FechaSolicitud}</p>
              <Link href={`casos/${caso.IdCaso}`}>Ver info</Link>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
