import type { service } from "../../types/service"

import styles from "./ServiceCard.module.css"

interface ServiceCardProps extends service {
  variant?: "home" | "gallery"
}

// ServiceCard component.
//
// Receives the data of an individual service and displays
// its content using the selected layout variant.
const ServiceCard = ({
  id,
  img,
  title,
  subtitle,
  variant = "home",
}: ServiceCardProps) => {

  return (

    <article
      className={`${styles.card} ${
        variant === "gallery" ? styles.cardGallery : ""
      }`}
    >

      {/* Displays the service identifier only in the Home variant. */}
      {variant === "home" && (
        <span className={styles.id}>{id}</span>
      )}

      {/* Displays the image representing the service. */}
      <img
        className={styles.image}
        src={img}
        alt={`${title} service`}
      />

      {/* Displays the service title. */}
      <h2 className={styles.title}>{title}</h2>

      {/* Displays the service description. */}
      <p className={styles.subtitle}>{subtitle}</p>

      {/* Separates this service from the next one. */}
      <div className={styles.baseline} />

    </article>
  )
}

export default ServiceCard