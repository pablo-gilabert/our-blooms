import { Link } from "react-router-dom"

import styles from "./CallToAction.module.css"

// Props define the content and destination required by this reusable section.
interface CallToActionProps {

    title: string
    subtitle: string
    buttonText: string
    buttonLink: string
}

// CallToAction component.
// Displays a reusable section containing a title, subtitle, and navigation button.
const CallToAction = ({

    title,
    subtitle,
    buttonText,
    buttonLink,

}: CallToActionProps) => {

  return (

    <section className={styles.section}>

      {/* Displays the section title. */}
      <p className={styles.title}>{title}</p>

      {/* Displays the section description. */}
      <p className={styles.subtitle}>{subtitle}</p>

      {/* React Router handles internal navigation without a full page reload. */}
      <Link className={styles.button} to={buttonLink}>
        {buttonText}
      </Link>

    </section>
  )
}

export default CallToAction
