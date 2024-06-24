import Link from "next/link";

export default function CasosLayout({ children }) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/casos/activos">Casos activos</Link>
          </li>
          <li>
            <Link href="/casos/historial">Historial de casos</Link>
          </li>
          <li>
            <Link href="/casos/agregar">Agregar caso</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
