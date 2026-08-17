import styles from "./Footer.module.css"

// Footer selects a different decorative footer image for each responsive range.
const Footer = () => {

  return (
    
    <>
      {/* Mobile footer artwork. */}
      <div className={styles.footer}>
          <img
              src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786492009/Image_dgjded.jpg" 
              alt="Footer image" 
          />
      </div>

      {/* Tablet footer artwork. */}
      <div className={styles.footerTablet}>
        <img 
          src="https://res.cloudinary.com/t1xhl1kz/image/upload/v1786572998/Image_slbf3h.jpg" 
          alt="Footer image" 
        />
      </div>

      {/* Desktop footer artwork. */}
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
