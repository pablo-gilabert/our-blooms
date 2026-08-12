import styles from "./Header.module.css"

const Header = () => {

  return (
    <>
      {/*---HEADER MOBILE---*/}
      <div className={styles.logo}>
          <img
              src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786478336/Logo_Image_senicz.png" 
              alt="Our blooms" 
          />
          <img 
              src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786478886/Image_pqsdds.jpg" 
              alt="Seasonal offer" 
          />
      </div>

      {/*---HEADER TABLET---*/}
      <div className={styles.logoTablet}>
          <img
              src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786553819/Logo_Image_s2baqo.jpg" 
              alt="Our blooms" 
          />
          <img 
              src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786554063/Image_bhn8z9.jpg" 
              alt="Seasonal offer" 
          />
      </div>  
    </> 

  )
}

export default Header