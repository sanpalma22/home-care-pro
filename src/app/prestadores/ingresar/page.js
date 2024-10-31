"use client";
import { useRouter } from "next/navigation";
import Back from "../../components/Back";
import { useEffect, useState } from "react";


export default function IngresarCasos() {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    especialidad: '',
    localidad: '',
    direccion: '',
    telefono: '',
    email: '',
    genero: '',
  });
  const [especialidades,setEspecialidades]=useState([{}])
  const router =useRouter();

  useEffect(() => {
    async function fetchEspecialidades() {
      try {
        const response = await fetch("http://localhost:5000/especialidad");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setEspecialidades(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }

    fetchEspecialidades();
  }, []);

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await fetch('http://localhost:5000/prestadores', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
      });
      if(response.ok){
        const result = await response.json();
        console.log(result);
        
      }
      else{
          console.error("error")
        }

      router.push("/prestadores")
    }



    return (
      <main>
        <Back></Back>
        <div className="mainContainer">
          <h1>Ingresar Prestador</h1>
        <form onSubmit={handleSubmit}>
          
        <div className="formIngreso">
          <div className="ingreso">
            <label htmlFor="nombreInput">Nombre:</label>
            <input name="nombre" type="text" placeholder="Nombre de la persona" onChange={handleChange} required />
          </div>

          <div className="ingreso">
            <label htmlFor="nombreInput">Apellido:</label>
            <input name="apellido" type="text" placeholder="Apellido" onChange={handleChange} required />
          </div>

          <div className="ingreso">
            <label htmlFor="nombreInput">DNI:</label>
            <input name="dni" type="text" placeholder="DNI" onChange={handleChange} required />
          </div>
          
          
          <div className="ingreso">
              <label htmlFor="nombreInput">Especialidad:</label>
              <select onChange={handleChange} name="especialidad" className="selectIngreso">
                <option disabled selected>Seleccionar</option>
                {especialidades.map((e) => (
                  <option value={e.IdEspecialidad}>{e.Nombre}</option>
                ))}
              </select>
            </div>

          <div className="ingreso">
            <label htmlFor="nombreInput">Localidad:</label>
            <input name="localidad" type="text" placeholder="Localidad" onChange={handleChange} required />
          </div>

          <div className="ingreso">
            <label htmlFor="nombreInput">Direccion:</label>
            <input name="direccion" type="text" placeholder="Direccion" onChange={handleChange} required />
          </div>

          <div className="ingreso">
            <label htmlFor="nombreInput">Telefono:</label>
            <input name="telefono" type="tel" placeholder="Telefono" onChange={handleChange} required />
          </div>

          <div className="ingreso">
            <label htmlFor="nombreInput">Email:</label>
            <input name="email" type="text" placeholder="Email" onChange={handleChange} required />
          </div>

          <div className="ingreso">
              <label htmlFor="nombreInput">Género:</label>
              <select onChange={handleChange} name="genero" className="selectIngreso">
                <option disabled selected>Seleccionar</option>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>X</option>
              </select>
            </div>

          <div className="ingreso">
            <label htmlFor="nombreInput">Contraseña:</label>
            <input name="contraseña" type="text" placeholder="Contraseña" onChange={handleChange} required />
          </div>          
        </div>

        <div className="containerBtn">
          <button type="submit" className="btnIngresar">Ingresar prestador</button>
        </div>
    </form>
    </div>

    </main>
    );
  }