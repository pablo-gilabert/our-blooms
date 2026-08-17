import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import NavbarDesktop from "./components/NavbarDesktop/NavbarDesktop"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import About from "./pages/About/About"
import Gallery from "./pages/Gallery/Gallery"
import Home from "./pages/Home/Home"

import styles from "./App.module.css"

// App is the top-level application component. It keeps the responsive navigation
// wrappers and the application's route table in one place.
function App() {

  return (

    <>
      {/* ScrollToTop watches route changes and restores the viewport to the top. */}
      <ScrollToTop/>

      {/* Only one of these wrappers is visible at a time, depending on viewport width. */}
      <div className={styles.navbarMobile}>
        <Navbar/>
      </div>

      <div className={styles.navbarDesktop}>
        <NavbarDesktop/>
      </div>

      {/* Routes determine which page component is rendered for each URL. */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>

    </>
  )
}

export default App
