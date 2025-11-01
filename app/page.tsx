'use client'
import NavBar from "./components/NavBar"

import Hero from "./components/Hero"
import Skills from "./components/Skills"


export default function Home() {

  return (
    <div className="bg-gray-1000">
      <NavBar />
      <Hero />
      <div className="w-full flex">
        <div className="w-[100%] h-0.5 bg-gray-300 mr-5 ml-5 opacity-15  rounded-sm">

        </div>
      </div>
      <Skills />
    </div>
  )
}
