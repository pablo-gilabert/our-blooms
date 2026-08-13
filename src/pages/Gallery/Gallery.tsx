import Arrangements from "../../components/Arrangements/Arrangements"
import Services from "../../components/Services/Services"
import CallToAction from "../../components/CallToAction/CallToAction"

import servicesGallery from "../../data/servicesGallery"

import styles from "./Gallery.module.css"
import Footer from "../../components/Footer/Footer"

const Gallery = () => {

  return (

    <>
      <h1 className={styles.title}>GALLERY</h1>
      <p className={styles.subtitle}>SEASONAL ARRANGEMENTS</p>

      <Arrangements/>

      <h2 className={styles.h2}>SERVICES</h2>

      <div className={styles.baseline}></div>

      <Services 
        services={servicesGallery}
        variant="gallery"
      />

      <CallToAction 
        title="WORK WITH US" 
        subtitle="Discover how we can add a touch of natural beauty to your next event." 
        buttonText="ABOUT US" 
        buttonLink="/about"
      />

      <Footer/>
    </>
  )
}

export default Gallery