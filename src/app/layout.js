import { Inter, Montserrat, Pacifico } from "next/font/google";
import "./globals.scss";
import "./humberger.scss";
import classes from "./layout.module.scss";
// import { useEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
// import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
// const customFont = localFont({ src: "./fonts/" });

export const metadata = {
  title: "Plano, TX General Dentistry | OraCare Dentistr",
  description: "Generated by create next app",
};

export const fonts = { pacifico, montserrat };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
