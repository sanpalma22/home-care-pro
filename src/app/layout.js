import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HomeCarePro",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header texto={"Header"}></Header>
        <div className="flex">
          <Sidebar/>
          <div className="main-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
