import Footer from "../../components/Footer/Footer"

import styles from "./About.module.css"

// About presents the brand story, founder information, historical imagery and closing copy.
const About = () => {

  return (

    <>
      <h1 className={styles.title}>ABOUT</h1>

      <p className={styles.subtitle}>OUR STORY</p>

      {/* Founder image and identity share a two-column layout on larger screens. */}
      <div className={styles.introGrid}>
        <div className={styles.ownerImage}>
          <img
            src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786654963/Image_yucxxy.png" 
            alt="Lily Smith, owner" 
          />
        </div>

        <div className={styles.owner}>
          <h2>LILY SMITH</h2>
          <p>Owner</p>
        </div>
      </div>

      <h2 className={styles.h2}>
        Our Blooms was founded in honor of Lily Smith's loving aunts, Teresa and Beth.
      </h2>

      {/* Three supporting story images become a grid at the tablet breakpoint. */}
      <div className={styles.gridImages}>
        <img src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786656658/Image_01_r8htli.png"/>
        <img src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786656657/Image_02_msbslq.png"/>
        <img src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786656657/Image_03_qv5fh6.png"/>
      </div>

      {/* First section of narrative copy. */}
      <div className={styles.historyContainer}>
        <p className={styles.history}>
          Lily's journey with flowers began in the heart of Oregon, amidst the flourishing fields 
          of her aunts' flower farm. It was there, surrounded by the abundance of nature, 
          that she discovered her passion for floral design. From learning the names of each 
          bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of 
          flowers like the rich Oregon soil.
        </p>

        <p className={styles.history}>
          Bloom & Co. is the expression of that lifelong passion, a place where her 
          love for flowers translates into beautifully curated arrangements that bring joy and 
          elegance to your spaces.
        </p>
      </div>

      {/* Decorative visual break between story sections. */}
      <div className={styles.breakerImage}>
        <img src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786681647/Image_breaker_fq5kny.png"/>
      </div>

      {/* Closing section of narrative copy before the footer. */}
      <div className={styles.historyContainer}>
        <p className={styles.history}>
          From humble beginnings, Bloom&Co has grown into a beloved local destination, known 
          for its artistic arrangements, personal service, and commitment to quality.
        </p>

        <p className={styles.history}>
          Discover how we can add a touch of natural beauty to your next event.
        </p>
      </div>

      <Footer/>
    </>

  )
}

export default About
