"use client";
import Link from "next/link";
import styles from './navbar.css'
import { usePathname } from 'next/navigation'

export default function Navbar({rutas}) {
  const pathname=usePathname();
  return (
    <div className="navbar">
      <ul className="lista">
        {rutas.map((ruta)=>(
          <li>
            <Link 
              href={ruta.root} 
              className={[ruta.class!=null?ruta.class:null, 
              pathname.includes(ruta.root)?"selectedNav":null
              ].filter(Boolean).join(" ")} 
              >{ruta.texto}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
