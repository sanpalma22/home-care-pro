import { useState } from "react";
import { useEffect } from "react";

export default function Caso({ id }) {
  const [caso, setCaso] = useState(null);
  useEffect(() => {
    async function fetchCaso() {
      try {
        const response = await fetch(`http://localhost:5000/casos/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setCaso(data);
        console.log(data);
        // Aquí podrías actualizar el estado o realizar otras operaciones con los datos recibidos
      } catch (error) {
        console.error("Error al obtener el caso:", error);
      }
    }

    fetchCaso();
  }, [id]); // Asegúrate de incluir `id` como dependencia para que useEffect se ejecute cuando `id` cambie

  // Aquí puedes devolver la estructura del componente
  return (
    <div>
      <div>
            <h2>Detalles del Caso {id}</h2>
            <p>Fecha de Ocurrencia: {caso.FechaOcurrencia}</p>
            <p>Fecha de Solicitud: {caso.FechaSolicitud}</p>
            <p>Diagnóstico: {caso.Diagnostico}</p>
        </div>
    </div>
  );
}
