import styles from "./Header.module.css"

const Header = () => {

  return (

    <div className={styles.logo}>

      <picture>

        <source
          media="(min-width: 1280px)"
          srcSet="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786577263/Logo_Image_qrlaqc.png"
        />

        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786553819/Logo_Image_s2baqo.jpg"
        />

        <img
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786478336/Logo_Image_senicz.png"
          alt="Our blooms"
        />

      </picture>

      <picture>

        <source
          media="(min-width: 1280px)"
          srcSet="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786577154/Image_izfje0.png"
        />

        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786554063/Image_bhn8z9.jpg"
        />

        <img
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786478886/Image_pqsdds.jpg"
          alt="Seasonal offer"
        />

      </picture>

    </div>
  )
}

export default Header