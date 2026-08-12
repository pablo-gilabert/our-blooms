import ServiceCard from "../ServiceCard/ServiceCard"
import servicesMobile from "../../data/servicesMobile"

const ServicesMobile = () => {

  return (

    <main>

      {servicesMobile.map((service) => (

        <ServiceCard

          key={service.id}
          {...service}
        />
      ))}

    </main>
  )
}

export default ServicesMobile