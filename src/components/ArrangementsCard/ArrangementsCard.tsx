import type { Arrangement } from "../../types/Arrangement"

import styles from "./ArrangementsCard.module.css"

// ArrangementsCard presents one arrangement's name, price and image.
const ArrangementsCard = ({
  title,
  price,
  img,
}: Arrangement) => {

  return (

    <article className={styles.card}>

      {/* Text content is kept separate from the image so CSS can reposition either area. */}
      <div className={styles.container}>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.price}>{price}</p>

      </div>

      {/* The image wrapper controls the card's image sizing and alignment. */}
      <div className={styles.image}>

        <img
          src={img}
          alt={title}
        />

      </div>

    </article>
  )
}

export default ArrangementsCard
