import styles from "./ServiceCard.module.css"

interface ServiceCardProps {

  id: number
  img: string
  title: string
  subtitle: string
}

// ServiceCard component.
//
// Receives the data of an individual service and displays
// its identifier, image, title, subtitle, and separator.
const ServiceCard = ({

  id,
  img,
  title,
  subtitle,

}: ServiceCardProps) => {

  return (
    
    <article className={styles.card}>

      {/* Displays the service identifier. */}
      <span className={styles.id}>{id}</span>

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