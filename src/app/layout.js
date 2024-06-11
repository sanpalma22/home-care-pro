import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
         <div>
          <ul>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/casos">Casos</Link>
            </li>
            <li>
              <Link href="/prestadores">Prestadores</Link>
            </li>
            <li>
              <Link href="/facturas">Facturas</Link>
            </li>
          </ul>
        </div> 
        {children}
      </body>
    </html>
  );
}
