"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Caso() {
  const [caso, setCaso] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function fetchCaso() {
      try {
        const response = await fetch(`http://localhost:5000/casos/14`);
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
  }, [router.caso]);

  
  return (
    <div>
      <p>Fecha de Ocurrencia: {caso.FechaOcurrencia}</p>
      <p>Fecha de Solicitud: {caso.FechaSolicitud}</p>
      <p>Diagnóstico: {caso.Diagnostico}</p>
    </div>
  );
}
