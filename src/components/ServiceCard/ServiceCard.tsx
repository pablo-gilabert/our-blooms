import type { Service } from "../../types/Service"

import styles from "./ServiceCard.module.css"

interface ServiceCardProps extends Service {
  variant?: "home" | "gallery"
}

// ServiceCard component.
//
// Displays a service using a different layout depending
// on the selected variant.
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

      {/* Contains the service title and description. */}
      <div className={styles.content}>

        {/* Displays the service title. */}
        <h2 className={styles.title}>{title}</h2>

        {/* Displays the service description. */}
        <p className={styles.subtitle}>{subtitle}</p>

      </div>

      {/* Displays the image representing the service. */}
      <img
        className={styles.image}
        src={img}
        alt={`${title} service`}
      />

      {/* Separates this service from the next one. */}
      <div className={styles.baseline} />

    </article>
  )
}

export default ServiceCard