import { useEffect, useRef, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { NavLink } from "react-router-dom"

import styles from "./Navbar.module.css"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleNavigation = () => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  // Closes the menu when clicking outside the navbar.
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {

      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }

    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [])

  return (

    <div
      ref={navbarRef}
      className={`${styles.navbar} ${menuOpen ? styles.navbarOpen : ""}`}
    >

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
        aria-expanded={menuOpen}
      >
        <FiMenu />
      </button>

      <nav className={styles.dropdown}>

        <NavLink to="/" onClick={handleNavigation}>
          HOME
        </NavLink>

        <NavLink to="/gallery" onClick={handleNavigation}>
          GALLERY
        </NavLink>

        <NavLink to="/about" onClick={handleNavigation}>
          ABOUT
        </NavLink>

      </nav>

      <div className={styles.baseline}></div>

    </div>
  )
}

export default Navbar