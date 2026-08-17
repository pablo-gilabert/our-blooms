import ServiceCard from "../ServiceCard/ServiceCard"

import type { Service } from "../../types/Service"

// Props allow the same renderer to consume Home services or Gallery services.
interface ServicesProps {
  services: Service[]
  variant?: "home" | "gallery"
}

// Services maps a service collection into reusable ServiceCard components.
const Services = ({
  services,
  variant = "home",
}: ServicesProps) => {

  return (

    <article>

      {/* Each service becomes one card while its id supplies the React key. */}
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
