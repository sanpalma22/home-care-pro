"use client";
import { useEffect, useState } from "react";
import styles from "../casos.module.css"

export default function IngresarCasos() {

  const [formData, setFormData] = useState({
    nombre: '',
    localidad: '',
    dni: '',
    prestacion: '',
    telefono: '',
    diagnostico: '',
    direccion: '',
    fechaNacimiento: '',
    cantDias: '',
    horasDia: ''
  });

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await fetch('http://localhost:5000/casos', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
      });
      console.log(formData)
    }



    return (
      <main>
        <div className="mainContainer">
          <h1>Ingresar Casos</h1>
        <form onSubmit={handleSubmit}>
          
          <div className={styles.formIngreso}>
            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Nombre:</label>
              <input name="nombre" type="text" placeholder="Nombre de la persona" onChange={handleChange} required/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Localidad:</label>
              <input name="localidad" type="text" placeholder="Localidad" onChange={handleChange} required/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">DNI:</label>
              <input name="dni" type="text" placeholder="DNI" onChange={handleChange} required/>
            </div>
            
            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Prestacion:</label>
              <input name="prestacion" type="text" placeholder="Prestacion" onChange={handleChange} required/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Telefono:</label>
              <input name="telefono" type="tel" placeholder="Telefono" onChange={handleChange} required/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Diagnostico:</label>
              <input name="diagnostico" type="text" placeholder="Diagnostico" onChange={handleChange} required/>
            </div>

            <div className={styles.ingreso} >
              <label htmlFor="nombreInput">Direccion:</label>
              <input name="direccion" type="text" placeholder="Direccion" onChange={handleChange} required/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Fecha de nacimiento:</label>
              <input name="fechaNacimiento" type="date" placeholder="Fecha de nacimiento" onChange={handleChange} required/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Cantidad de dias:</label>
              <input name="cantDias" type="number" placeholder="Cantidad de dias" onChange={handleChange} required min="0"/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Horas por dia:</label>
              <input name="horasDia" type="number" placeholder="Horas por dia" onChange={handleChange} required min="0" max="24"/>
            </div>

          </div>
          <div className={styles.containerBtn}>
            <button type="submit" className="btnIngresar">Ingresar caso</button>
          </div>
          </form>
        </div>
      </main>
    );
  }