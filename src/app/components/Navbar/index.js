import Link from "next/link";
import styles from './navbar.css'
import BotonAgregar from "../BotonAgregar";

export default function Navbar({links}) {
  return (
    <div className="navbar">
      <ul className="lista">
        {links.map((link)=>(
          <li>
            <Link href={link.root} className={link.class!=null?link.class:null}>{link.texto}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
