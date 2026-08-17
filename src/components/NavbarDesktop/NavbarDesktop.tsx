import { NavLink } from "react-router-dom"

import styles from "./NavbarDesktop.module.css"

// Desktop navigation keeps all links visible without a hamburger menu.
const NavbarDesktop = () => {

  // Reset the viewport even when the user clicks the route they are already on.
  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (

    <div className={styles.navbar}>
        
      <h1 className={styles.logo}>Our Blooms®</h1>

      <NavLink
        className={styles.home}
        to="/"
        onClick={handleNavigation}
      >
        HOME
      </NavLink>

      <NavLink
        className={styles.gallery}
        to="/gallery"
        onClick={handleNavigation}
      >
        GALLERY
      </NavLink>

      <NavLink
        className={styles.about}
        to="/about"
        onClick={handleNavigation}
      >
        ABOUT
      </NavLink>

      <div className={styles.baseline}></div>

    </div>
  )
}

export default NavbarDesktop
