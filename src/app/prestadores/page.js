"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Prestadores() {
    const [prestadores, setPrestadores] = useState([]);

    useEffect(() => {
      async function fetchPrestadores() {
          try {
              const response = await fetch('http://localhost:5000/medicos');
              if (!response.ok) {
                  throw new Error('Error al obtener los datos');
              }
              const data = await response.json();
              setPrestadores(data.filter(p => p.Activo === true));
          } catch (error) {
              console.error('Error al obtener los prestadores:', error);
          }
      }

      console.log(prestadores)
      fetchPrestadores();
  }, []);


    return (
      <main>
      <div className="mainContainer">
            <h1>Prestadores activos</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Localidad</th>
                        <th>Género</th>
                        <th className='accion'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {prestadores.map((p) => (
                        <tr key={p.IdPrestador}>
                            <td>{p.Nombre}</td>
                            <td>{p.Especialidad}</td>
                            <td>{p.Localidad}</td>
                            <td>{p.Genero}</td>
                            <td><Link href={`/prestadores/${p.IdPrestador}`} className="verInfo">Ver info</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
    );
}