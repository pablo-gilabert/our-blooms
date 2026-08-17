import type { Service } from "../../types/Service"

import styles from "./ServiceCard.module.css"

// ServiceCardProps reuses the shared Service data shape and adds a presentation variant.
interface ServiceCardProps extends Service {
  variant?: "home" | "gallery"
}

// ServiceCard component.
// Displays a service using a different layout depending on the selected variant.
const ServiceCard = ({
  id,
  img,
  title,
  subtitle,
  variant = "home",
}: ServiceCardProps) => {

  return (

    <article
      // The gallery variant receives an extra CSS class so the same data component
      // can be presented with a different layout without duplicating the component.
      className={`${styles.card} ${
        variant === "gallery" ? styles.cardGallery : ""
      }`}
    >

      {/* Home displays the numbered identifier; Gallery intentionally omits it. */}
      {variant === "home" && (
        <span className={styles.id}>{id}</span>
      )}

      {/* Title and description stay grouped so desktop CSS can reposition the content. */}
      <div className={styles.content}>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

      </div>

      {/* The same service image is reused by both presentation variants. */}
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