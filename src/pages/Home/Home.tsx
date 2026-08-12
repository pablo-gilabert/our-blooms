import Header from "../../components/Header/Header"
import CallToAction from "../../components/CallToAction/CallToAction"
import Footer from "../../components/Footer/Footer"

import ServicesMobile from "../../components/ServicesMobile/ServicesMobile"
import ServicesTablet from "../../components/ServicesTablet/ServicesTablet"

import styles from "./Home.module.css"

const Home = () => {

  return (

    <div className={styles.home}>

        <Header/>

        {/*---TITLE + SUBTITLE + BUTTON---*/}
        <CallToAction 
          title="WHO WE ARE" 
          subtitle="We're Our Blooms® and we're here to help you find your floral story." 
          buttonText="ABOUT US" 
          buttonLink="/about"
        />

        {/*---DECORATIVE IMAGE MOBILE---*/}
        <div className={styles.image}>
          <img
            src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786486532/Image_breaker_wz7wh0.png" 
            alt="Presentation image" 
          />
        </div>

        {/*---DECORATIVE IMAGE TABLET---*/}
        <div className={styles.imageTablet}>
          <img
            src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786555949/Image_tskhrj.png" 
            alt="Presentation image" 
          />
        </div>

        {/*---TITLE + SUBTITLE + LINE---*/}
        <div className={styles.container}>

          <p className={styles.title}>WHAT WE DO</p>
          <p className={styles.subtitle}>We bring a touch of that simple magic into your world.</p>
          <div className={styles.baseline}></div>
        </div>

        {/*---SERVICES MOBILE---*/}
        <div className={styles.servicesMobile}>
          <ServicesMobile/>
        </div>

        {/*---SERVICES TABLET---*/}
        <div className={styles.servicesTablet}>
          <ServicesTablet/>
        </div>

        {/*---DECORATIVE IMAGE MOBILE---*/}
        <div className={styles.purpleFlower}>
          <img
            src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786490600/Image_qrzl3a.jpg" 
            alt="Purple flower" 
          />
        </div>

        {/*---DECORATIVE IMAGE TABLET---*/}
        <div className={styles.purpleFlowerTablet}>
          <img
            src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786571882/Image_nufa82.jpg" 
            alt="Purple flower" 
          />
        </div>

        {/*---TITLE + SUBTITLE + BUTTON---*/}
        <CallToAction 
          title="WORK WITH US" 
          subtitle="Discover how we can add a touch of natural beauty to your next event." 
          buttonText="ABOUT US" 
          buttonLink="/about"
        />

        {/*---FOOTER---*/}
        <Footer/>

    </div>

  )
}

export default Home