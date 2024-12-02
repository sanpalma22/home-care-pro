"use client";
import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
  const [casos, setCasos] = useState([]);
  const [prestadores, setPrestadores] = useState([]);

  // Fetch de datos
  useEffect(() => {
    async function fetchData() {
      try {
        const casosResponse = await fetch("http://localhost:5000/casos");
        const prestadoresResponse = await fetch("http://localhost:5000/medicos");

        if (!casosResponse.ok || !prestadoresResponse.ok) {
          throw new Error("Error al obtener los datos");
        }

        const casosData = await casosResponse.json();
        const prestadoresData = await prestadoresResponse.json();

        setCasos(casosData.filter((caso) => caso.IdSituacion === 2).slice(0, 5)); // Casos activos
        setPrestadores(prestadoresData.filter((p) => p.Activo === true).slice(0, 5)); // Prestadores activos
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <h1>Dashboard</h1>
    <main className={styles.dashboardContainer}>
      <div className="mainContainer">
      <div className={styles.header}>
            <h2>Casos Activos</h2>
            <Link href="/casos/activos" className={styles.link}>
              Ver todos
            </Link>
          </div>
        <table className="table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Diagnóstico</th>
              <th>Prestador</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {casos.length === 0 ? (
              <tr>
                <td colSpan="3">No hay casos activos</td>
              </tr>
            ) : (
              casos.map((caso) => (
                <tr key={caso.IdCaso}>
                  <td>{caso.NombrePaciente}</td>
                  <td>{caso.Diagnostico}</td>
                  <td>{caso.NombrePrestador}</td>
                  <td><Link href={`/casos/${caso.IdCaso}`} className="verInfo">Ver info</Link></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Tabla de Prestadores Activos */}
      <div className="mainContainer">
      <div className={styles.header}>
            <h2>Prestadores Activos</h2>
            <Link href="/prestadores" className={styles.link}>
              Ver todos
            </Link>
          </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Localidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {prestadores.length === 0 ? (
              <tr>
                <td colSpan="3">No hay prestadores activos</td>
              </tr>
            ) : (
              prestadores.map((p) => (
                <tr key={p.IdPrestador}>
                  <td>{p.Nombre}</td>
                  <td>{p.Especialidad}</td>
                  <td>{p.Localidad}</td>
                  <td><Link href={`/prestadores/${p.IdPrestador}`} className="verInfo">Ver info</Link></td>
                </tr>
                
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
    </>
  );
}
