"use client"
import Hero from "./components/Hero";
import NewProducts from './components/NewProducts';
import Image from "next/image";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return ( 
    <main>
        <Hero />
        <NewProducts />
        <Testimonials />
    </main>
  );
}
