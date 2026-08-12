import styles from "./Header.module.css"

const Header = () => {

  return (

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

  )
}

export default Header