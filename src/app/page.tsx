"use client"

import Navbar from "@/components/navbar";
import Page from "@/components/page";

export default function Home() {
  return (
    <div className="relative bg-[url(../../public/artworks/walp.png)] bg-cover bg-center">
      <Navbar/>
      <Page />
    </div>
  );
}
