import { useState } from "react"
import { FiMenu } from "react-icons/fi"

import styles from "./Navbar.module.css"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (

    <div className={`${styles.navbar} ${menuOpen ? styles.navbarOpen : ""}`}>
      
      <img
        className={styles.logo}
        src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786469801/O.B._lkw4vs.png"
        alt="Our Blooms"
      />

      <button
        className={styles.menu}
        type="button"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}>
        <FiMenu />
      </button>

      <nav className={styles.dropdown}>
        <a href="/">HOME</a>
        <a href="/gallery">GALLERY</a>
        <a href="/about">ABOUT</a>
      </nav>

      <div className={styles.baseline}></div>

    </div>
  )

}

export default Navbar