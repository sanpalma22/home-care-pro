"use client"; 
import Link from "next/link";
import styles from "./sidebar.css";
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="sidebar">
      <div className="sidebar-header"></div>
        <Link href="/dashboard" className={pathname.includes("/dashboard")?"selected":""}>Dashboard</Link>
        <Link href="/casos" className={pathname.includes("/casos")?"selected":""}>Casos</Link>
        <Link href="/prestadores" className={pathname.includes("/prestadores")?"selected":""}>Prestadores</Link>
        <Link href="/facturas" className={pathname.includes("/facturas")?"selected":""}>Facturas</Link>
    </div>
  );
}
