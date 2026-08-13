import styles from "./Footer.module.css"

const Footer = () => {

  return (
    
    <>
      <div className={styles.footer}>
          <img
              src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786492009/Image_dgjded.jpg" 
              alt="Footer image" 
          />
      </div>

      <div className={styles.footerTablet}>
        <img 
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786572998/Image_slbf3h.jpg" 
          alt="Footer image" 
        />
      </div>

      <div className={styles.footerDesktop}>
        <img 
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786582042/Image_amyrep.png" 
          alt="Footer image" 
        />
      </div>
    </>
  )
}

export default Footer