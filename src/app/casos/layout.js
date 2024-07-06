import Link from "next/link";
import Navbar from "../components/Navbar";

export default function CasosLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}
