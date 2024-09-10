'use client';
import Link from "next/link";
import Navbar from "../components/Navbar";
import { usePathname } from 'next/navigation'


export default function PrestadoresLayout({ children }) {

  const rutas = [
    {
      texto : "Prestadores",
      root: "/prestadores"
    },
    {
      texto : "Ingresar prestador",
      root: "/prestadores/ingresar",
      class : "btnIngresar"
    }
  ]
  const pathname = usePathname()
  const hideNavbarRoutes = ["/prestadores/ingresar"];
  return (
    <>
      {!hideNavbarRoutes.includes(pathname) && <Navbar rutas={rutas}></Navbar>}  
      {children}
      
    </>
  );
}