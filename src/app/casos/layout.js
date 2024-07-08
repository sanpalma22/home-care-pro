import Link from "next/link";
import Navbar from "../components/Navbar";

export default function CasosLayout({ children }) {
  const rutas = [
    {
      texto : "Casos activos",
      root: "/casos/activos"
    },
    {
      texto : "Historial casos",
      root: "/casos/historial"
    },
    {
      texto : "Ingresar caso",
      root: "/casos/insertar",
      class : "btnAgregar"
    }
  ]
  return (
    <>
      <Navbar links={rutas}></Navbar>
      {children}
    </>
  );
}
