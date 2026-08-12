import { NavLink } from "react-router-dom"

import styles from "./NavbarDesktop.module.css"

const NavbarDesktop = () => {

  return (

    <div className={styles.navbar}>
        
        <h1 className={styles.logo}>Our Blooms®</h1>

        <NavLink className={styles.home} to="/">HOME</NavLink>
        <NavLink className={styles.gallery} to="/gallery">GALLERY</NavLink>
        <NavLink className={styles.about} to="/about">ABOUT</NavLink>

        <div className={styles.baseline}></div>
    </div>
  )
}

export default NavbarDesktop