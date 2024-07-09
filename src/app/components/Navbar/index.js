import Link from "next/link";
import styles from './navbar.css'
import BotonAgregar from "../BotonAgregar";

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
          <BotonAgregar texto={"Ingresar caso"} root={"/casos/ingresar"}></BotonAgregar>
        </li>
      </ul>
    </div>
  );
}
