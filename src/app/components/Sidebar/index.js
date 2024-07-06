import Link from "next/link";
import styles from "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header"></div>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/casos">Casos</Link>
        <Link href="/prestadores">Prestadores</Link>
        <Link href="/facturas">Facturas</Link>
    </div>
  );
}
