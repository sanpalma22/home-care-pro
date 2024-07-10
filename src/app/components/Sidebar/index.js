"use client"; 
import Link from "next/link";
import styles from "./sidebar.css";
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname();
  const rutas = [
    {
      texto : "Dashboard",
      root: "/dashboard"
    },
    {
      texto : "Casos",
      root: "/casos"
    },
    {
      texto : "Prestadores",
      root: "/prestadores",
    },
    {
      texto : "Facturas",
      root: "/facturas",
    }
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-header"></div>
        {
          rutas.map((ruta)=>(
              <Link href={ruta.root} className={pathname.includes(ruta.root)?"selected":null}>{ruta.texto}</Link>
          ))
        }
    </div>
  );
}
