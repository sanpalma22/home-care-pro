"use client";
import Back from "@/app/components/Back";
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
    return (
        <>
            <Back />
            {devoluciones.length === 0 ? (
                <p className="textoSinRegistros">Caso sin devoluciones</p>
            ) : (
                devoluciones.slice().reverse().map((item, i) => (
                    <DevolucionAcord devolucion={item} index={devoluciones.length - i} key={item.IdDevolucion} />
                ))
            )}
        </>
    );
}