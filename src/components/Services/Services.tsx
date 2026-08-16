import ServiceCard from "../ServiceCard/ServiceCard"

interface Service {
  id?: number
  img: string
  title: string
  subtitle: string
}

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

        {services.map((service, index) => (
          <ServiceCard
            key={service.id ?? index}
            {...service}
            variant={variant}
          />
        ))}

      </article>
  )
}

export default Services