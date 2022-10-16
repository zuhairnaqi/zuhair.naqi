import React from "react"
import Banner from "../components/Banner/Banner"
import AboutMe from "../components/AboutMe/AboutMe"
import '../styles/global.css'
import ThemeToggler from "../components/ThemeToggler/ThemeToggler"

export default function Home() {
  return (
    <div>
      <div className="switch-theme">
        <ThemeToggler />
      </div>
      <Banner />
      <AboutMe />
    </div>
  )
}
