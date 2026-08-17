import { useEffect, useRef, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { NavLink } from "react-router-dom"

import styles from "./Navbar.module.css"

// Navbar is the mobile navigation. Its state controls the expandable menu.
const Navbar = () => {

  // Tracks whether the mobile navigation links are currently visible.
  const [menuOpen, setMenuOpen] = useState(false)

  // Holds the navbar DOM node so outside-click detection can exclude it.
  const navbarRef = useRef<HTMLDivElement>(null)

  // Toggle the menu while preserving the previous state safely.
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  // Close the menu and reset the viewport when a navigation link is clicked.
  const handleNavigation = () => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  // Listen for clicks outside the navbar and close the expanded menu.
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

      {/* navbarOpen adds the CSS state used to reveal the dropdown. */}

      <img
        className={styles.logo}
        src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786469801/O.B._lkw4vs.png"
        alt="Our Blooms"
      />

      {/* The button changes menuOpen and exposes its state to assistive technology. */}
      <button
        className={styles.menu}
        type="button"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <FiMenu />
      </button>

      {/* NavLink keeps navigation inside React Router and applies active-link behavior. */}
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