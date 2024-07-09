'use client';
import Link from "next/link";
import Navbar from "../components/Navbar";
import { usePathname } from 'next/navigation'


export default function CasosLayout({ children }) {
  const pathname = usePathname()
  const hideNavbarRoutes = ["/casos/ingresar"];
  return (
    <>
      {!hideNavbarRoutes.includes(pathname) && <Navbar />}  
      {children}
    </>
  );
}
