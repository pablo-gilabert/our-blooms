import ArrangementsCard from "../ArrangementsCard/ArrangementsCard"

import arrangements from "../../data/arrangements"

import styles from "./Arrangements.module.css"

// Arrangements maps the arrangement data into reusable arrangement cards.
const Arrangements = () => {

  return (

    <main className={styles.card}>

      {/* Each data object becomes one card. The id is used as React's stable list key. */}
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
