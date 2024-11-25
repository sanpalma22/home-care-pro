"use client";
import { useRouter } from "next/navigation";
import Back from "../../components/Back";
import { useEffect, useState } from "react";

export default function IngresarCasos() {
  const [formData, setFormData] = useState({
    nombre: "",
    localidad: "",
    dni: "",
    prestacion: "",
    telefono: "",
    diagnostico: "",
    direccion: "",
    fechaNacimiento: "",
    cantDias: "",
    horasDia: "",
    prestador: "",
  });
  const [prestadores, setPrestadores] = useState([]);
  const [prestaciones, setPrestaciones] = useState([]);
  const router =useRouter();

  useEffect(() => {
    async function fetchPrestadores() {
      try {
        const response = await fetch("http://localhost:5000/medicos");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setPrestadores(data);
        
      } catch (error) {
        console.error("Error al obtener los prestadores:", error);
      }
    }
    async function fetchPrestaciones() {
      try {
        const response = await fetch("http://localhost:5000/prestacion");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setPrestaciones(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    
    fetchPrestaciones();
    fetchPrestadores();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/casos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      console.error("error");
    }
    console.log(formData)
    router.push("/casos"); 

  };
  console.log(prestadores);
  return (
    <main>
      <Back></Back>
      <div className="mainContainer">
        <h1>Ingresar Casos</h1>
        <form onSubmit={handleSubmit}>
          <div className="formIngreso">
            <div className="ingreso">
              <label htmlFor="nombreInput">Nombre:</label>
              <input
                name="nombre"
                type="text"
                placeholder="Nombre de la persona"
                onChange={handleChange}
                required
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Localidad:</label>
              <input
                name="localidad"
                type="text"
                placeholder="Localidad"
                onChange={handleChange}
                required
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">DNI:</label>
              <input
                name="dni"
                type="text"
                placeholder="DNI"
                onChange={handleChange}
                required
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Prestación:</label>
              <select onChange={handleChange} name="prestacion" className="selectIngreso">
                <option disabled selected>Seleccionar</option>
                {prestaciones.map((p) => (
                  <option value={p.IdPrestacion}>{p.Nombre}</option>
                ))}
              </select>
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Telefono:</label>
              <input
                name="telefono"
                type="tel"
                placeholder="Telefono"
                onChange={handleChange}
                required
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Diagnostico:</label>
              <input
                name="diagnostico"
                type="text"
                placeholder="Diagnostico"
                onChange={handleChange}
                required
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Direccion:</label>
              <input
                name="direccion"
                type="text"
                placeholder="Direccion"
                onChange={handleChange}
                required
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Fecha de nacimiento:</label>
              <input
                name="fechaNacimiento"
                type="date"
                placeholder="Fecha de nacimiento"
                onChange={handleChange}
                required
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Cantidad de dias:</label>
              <input
                name="cantDias"
                type="number"
                placeholder="Cantidad de dias"
                onChange={handleChange}
                required
                min="0"
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Horas por dia:</label>
              <input
                name="horasDia"
                type="number"
                placeholder="Horas por dia"
                onChange={handleChange}
                required
                min="0"
                max="24"
              />
            </div>

            <div className="ingreso">
              <label htmlFor="nombreInput">Prestador:</label>
              <select className="selectIngreso">
                <option 
                name="prestador"
                onChange={handleChange}
                 disabled selected>Seleccionar</option>
                {prestadores.map((p) => (
                  <option value={p.IdPrestador}>{p.Nombre}</option>
                ))}
                
              </select>
            </div>
          </div>

          <div className="containerBtn">
            
            <button type="submit" className="btnIngresar">
              Ingresar caso 
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
