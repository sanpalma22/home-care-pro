"use client";
import React, { useEffect, useState } from 'react';

export default function Prestadores() {
    const [prestadores, setPrestadores] = useState([]);

    useEffect(() => {
      async function fetchPrestadores() {
          try {
              const response = await fetch('http://localhost:5000/prestadores');
              if (!response.ok) {
                  throw new Error('Error al obtener los datos');
              }
              const data = await response.json();
              setPrestadores(data);
          } catch (error) {
              console.error('Error al obtener los prestadores:', error);
          }
      }
      console.log(prestadores)
      fetchPrestadores();
  }, []);


    return (
      <main>
        <div>
          <h1>Medicos</h1>
          <ul>
            {prestadores.map(prestador => (
              <p>{prestador.Nombre}</p>
            ))}
          </ul>
        </div>
      </main>
    );
}