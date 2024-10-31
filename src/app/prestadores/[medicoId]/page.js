"use client";

import { useParams } from "next/navigation";
import { useState,useEffect } from "react";

export default function Infoprestadores(){
    const params = useParams()
    const [prestador, setPrestador] = useState([]);
    
    useEffect(() => {
        async function fetchPrestadores() {
        try {
            const response = await fetch(`http://localhost:5000/prestadores/${params.medicoId}`);
            if (!response.ok) {
            throw new Error("Error al obtener los datos");
            }
            const data = await response.json();
            setPrestador(data);
            console.log(prestador)
        } catch (error) {
            console.error("Error al obtener los casos:", error);
        }
        }
        fetchPrestadores();
    }, []);

    return(
        <main>
        {prestador.map((item, i) => (
        <>
        <h1>Nombre: {item.Nombre} </h1>
        <h1>Apellido: {item.Apellido} </h1>
        <h2>Especialidad: {item.Especialidad} </h2>
        <h1>DNI: {item.Dni} </h1>
        <h1>Direccion: {item.Direccion} </h1>
        <h1>Localidad: {item.Localidad} </h1>
        <h1>Telefono: {item.Telefono} </h1>
        <h1>Mail: {item.Email} </h1>
        <h1>Genero: {item.Genero} </h1>

        </>
      ))}
      
    </main>
    )
}
