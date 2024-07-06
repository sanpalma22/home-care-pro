import Link from "next/link";
import styles from './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="lista">
        <li>
          <Link href="/casos/activos">Casos activos</Link>
        </li>
        <li>
          <Link href="/casos/historial">Historial de casos</Link>
        </li>
        <li>
          <Link href="/casos/agregar" className="btnAgregar">Agregar caso</Link>
        </li>
      </ul>
    </div>
  );
}
