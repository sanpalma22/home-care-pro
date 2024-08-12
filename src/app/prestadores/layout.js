'use client';
import Link from "next/link";
import Navbar from "../components/Navbar";
import { usePathname } from 'next/navigation'


export default function PrestadoresLayout({ children }) {

  const rutas = [
    {
      texto : "Prestadores",
      root: "/medicos"
    },
    {
      texto : "Historial casos",
      root: "/casos/historial"
    },
    {
      texto : "Ingresar caso",
      root: "/casos/ingresar",
      class : "btnIngresar"
    }
  ]
  const pathname = usePathname()
  const hideNavbarRoutes = ["/casos/ingresar"];
  return (
    <>
      {!hideNavbarRoutes.includes(pathname) && <Navbar rutas={rutas}></Navbar>}  
      {children}
      
    </>
  );
}