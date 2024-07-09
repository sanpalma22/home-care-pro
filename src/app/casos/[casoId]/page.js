"use client";
import Link from "next/link";

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
    <div className="infoCaso">
      <p>Persona: {caso.NombrePaciente}</p>
      <p>Nombre prerstador: {caso.NombrePrestador}</p>
      <p>Fecha de Ocurrencia: {caso.FechaOcurrencia}</p>
      <p>Fecha de Solicitud: {caso.FechaSolicitud}</p>
      <Link href={`/casos/${caso.IdCaso}/devolucion`}>Devoluciones del médico</Link>
    </div>
  );
}
