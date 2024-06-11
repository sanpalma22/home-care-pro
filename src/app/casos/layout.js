import Link from "next/link";

export default function CasosLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
         <div>
          <ul>
            <li>
              <Link href="/casos-activos">Casos Activos</Link>
            </li>
            
          </ul>
        </div> 
        {children}
      </body>
    </html>
  );
}
