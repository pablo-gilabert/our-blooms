import ServiceCard from "../ServiceCard/ServiceCard"

import type { Service } from "../../types/Service"

interface ServicesProps {
  services: Service[]
  variant?: "home" | "gallery"
}

// Services component.
//
// Receives a collection of services and renders a ServiceCard
// for each item using the selected layout variant.
const Services = ({
  services,
  variant = "home",
}: ServicesProps) => {

  return (

    <article>

      {services.map((service) => (

        <ServiceCard
          key={service.id}
          {...service}
          variant={variant}
        />

      ))}

    </article>
  )
}

export default Services