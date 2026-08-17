import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import NavbarDesktop from "./components/NavbarDesktop/NavbarDesktop"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import About from "./pages/About/About"
import Gallery from "./pages/Gallery/Gallery"
import Home from "./pages/Home/Home"

import styles from "./App.module.css"

function App() {

  return (

    <>
      <ScrollToTop/>

      <div className={styles.navbarMobile}>
        <Navbar/>
      </div>

      <div className={styles.navbarDesktop}>
        <NavbarDesktop/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>

    </>
  )
}

export default App