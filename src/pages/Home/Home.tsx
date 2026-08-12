import Header from "../../components/Header/Header"
import CallToAction from "../../components/CallToAction/CallToAction"
import Services from "../../components/Service/Service"
import Footer from "../../components/Footer/Footer"

import styles from "./Home.module.css"

const Home = () => {

  return (

    <div className={styles.home}>
        <Header/>

        <CallToAction 
          title="WHO WE ARE" 
          subtitle="We're Our Blooms® and we're here to help you find your floral story." 
          buttonText="ABOUT US" 
          buttonLink="/about"
        />

        <img className={styles.image}
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786486532/Image_breaker_wz7wh0.png" 
          alt="" 
        />

        <div className={styles.container}>

          <p className={styles.title}>WHAT WE DO</p>

          <p className={styles.subtitle}>We bring a touch of that simple magic into your world.</p>
        
          <div className={styles.baseline}></div>
        </div>

        <Services/>

        <img className={styles.purpleFlower}
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786490600/Image_qrzl3a.jpg" 
          alt="Purple flower" 
        />

        <CallToAction 
          title="WORK WITH US" 
          subtitle="Discover how we can add a touch of natural beauty to your next event." 
          buttonText="ABOUT US" 
          buttonLink="/about"
        />

        <Footer/>

    </div>

  )
}

export default Home