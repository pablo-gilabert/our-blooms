import Header from "../../components/Header/Header"
import CallToAction from "../../components/CallToAction/CallToAction"
import Services from "../../components/Services/Services"
import Footer from "../../components/Footer/Footer"

import services from "../../data/services"

import styles from "./Home.module.css"

const Home = () => {

  return (

    <div className={styles.home}>

      <Header />

      <CallToAction
        title="WHO WE ARE"
        subtitle="We're Our Blooms® and we're here to help you find your floral story."
        buttonText="ABOUT US"
        buttonLink="/about"
      />

      <picture className={styles.image}>

        <source
          media="(min-width: 1280px)"
          srcSet="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786577507/Image_1_ahok5t.png"
        />

        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786555949/Image_tskhrj.png"
        />

        <img
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786486532/Image_breaker_wz7wh0.png"
          alt="Floral arrangement"
        />

      </picture>

      <div className={styles.container}>

        <p className={styles.title}>WHAT WE DO</p>

        <p className={styles.subtitle}>
          We bring a touch of that simple magic into your world.
        </p>

        <div className={styles.baseline}></div>

      </div>

      <Services
        services={services}
        variant="home"
      />

      <picture className={styles.purpleFlower}>

        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786490600/Image_qrzl3a.jpg"
        />

        <img
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786490600/Image_qrzl3a.jpg"
          alt="Purple flower"
        />

      </picture>

      <CallToAction
        title="WORK WITH US"
        subtitle="Discover how we can add a touch of natural beauty to your next event."
        buttonText="ABOUT US"
        buttonLink="/about"
      />

      <Footer />

    </div>
  )
}

export default Home