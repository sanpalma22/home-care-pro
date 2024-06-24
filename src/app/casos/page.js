"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Casos() {
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    async function fetchCasos() {
      try {
        const response = await fetch("http://localhost:5000/api/casos");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setCasos(data);
        console.log(data);
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
              <p>{caso.NombrePaciente}</p>
              <p>{caso.Diagnostico}</p>
              <p>{caso.NombrePrestador}</p>
              <p>{caso.NombrePrestacion}</p>
              <p>{caso.FechaOcurrencia}</p>
              <p>{caso.FechaSolicitud}</p>
              <Link href={`casos/${caso.IdCaso}`}>Ver info</Link>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
