"use client";
import DevolucionAcord from "../../../components/DevolucionAcord";
import { useParams } from "next/navigation";
import { useState,useEffect } from "react";

export default function Devolucion(){
    const params = useParams();
    const [devoluciones, setDevoluciones] = useState([]);

    useEffect(() => {
        async function fetchDevoluciones() {
        try {
            const response = await fetch(`http://localhost:5000/casos/${params.casoId}/devolucion`);
            if (!response.ok) {
            throw new Error("Error al obtener los datos");
            }
            const data = await response.json();
            setDevoluciones(data);
        } catch (error) {
            console.error("Error al obtener los casos:", error);
        }
        }
        fetchDevoluciones();
    }, []);
return(
    <>
      {devoluciones.map((item, i) => (
        <DevolucionAcord devolucion={item} index={i}></DevolucionAcord>
      ))}
    </>
)
}