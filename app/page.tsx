"use client"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AbilitiesSection from "./components/AbilitiesSection"
import GrayLine from "./components/GrayLine"
import BallpitComoponent from './components/animations/balls/BallpitComoponent';
import { useState, useEffect } from "react";
import { log } from "console";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkmobile = () => setIsMobile(window.innerWidth < 768)
    checkmobile()
    window.addEventListener('rezise',checkmobile)
    return () => window.addEventListener("resize", checkmobile)
  }, [])
  
  return (
    <div className="bg-gray-1000">
      {
        isMobile ?  <></> : <BallpitComoponent />
      }
      <Hero />
      <GrayLine />
      <Skills />
      <GrayLine />
      <AbilitiesSection />
    </div>
  )
}

