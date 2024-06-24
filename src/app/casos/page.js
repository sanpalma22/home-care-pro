"use client";
import React, { useEffect, useState } from "react";

export default function Casos() {
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    async function fetchCasos() {
      try {
        // const response = await fetch('http://localhost:5000/api/casos');
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
            <li key={caso.IdEspecialidad}>
              {caso.Nombre}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
