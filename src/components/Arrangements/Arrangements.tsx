import ArrangementsCard from "../ArrangementsCard/ArrangementsCard"
import arrangements from "../../data/arrangements"

import styles from "./Arrangements.module.css"

const Arrangements = () => {

  return (

    <main className={styles.card}>

      {arrangements.map((arrangement) => (

        <ArrangementsCard

          key={arrangement.id}
          {...arrangement}
        />
      ))}

    </main>
  )
}

export default Arrangements