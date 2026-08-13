import styles from "./ArrangementsCard.module.css"

interface ArrangementsCardProps {

  title: string
  price: string
  img: string
}

const ArrangementsCard = ({

  title,
  price,
  img,
}: ArrangementsCardProps) => {

  return (
    
    <article className={styles.card}>

      <div className={styles.container}>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.price}>{price}</p>

      </div>

      <div className={styles.image}>
        <img
          src={img}
          alt={`${title}`}
        />
      </div>

    </article>
  )
}

export default ArrangementsCard