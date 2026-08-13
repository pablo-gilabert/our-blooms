import ServiceCard from "../ServiceCard/ServiceCard"
import services from "../../data/services"

const Services = () => {

  return (

    <main>

      {services.map((service) => (

        <ServiceCard

          key={service.id}
          {...service}
        />
      ))}

    </main>
  )
}

export default Services