import ServiceCard from "../ServiceCard/ServiceCard"

import type { Service } from "../../types/service"

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

    <section>

      {services.map((service) => (

        <ServiceCard
          key={service.id}
          {...service}
          variant={variant}
        />

      ))}

    </section>
  )
}

export default Services