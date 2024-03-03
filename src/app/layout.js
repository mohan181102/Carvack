import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={"main"}>
        <section className="navigation">
          <Header/>
          <Sidebar/>
        </section>
        
        {children}
        
      </body>
    </html>
    </>
  );
}
