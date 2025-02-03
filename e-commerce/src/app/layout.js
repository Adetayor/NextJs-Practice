import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import HeaderMain from "./components/HeaderMain";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderTop />
        <HeaderMain />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
