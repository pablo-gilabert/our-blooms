import ServiceCard from "../ServiceCard/ServiceCard"
import servicesTablet from "../../data/servicesTablet"

const ServicesTablet = () => {

  return (

    <main>

      {servicesTablet.map((service) => (

        <ServiceCard

          key={service.id}
          {...service}
        />
      ))}

    </main>
  )
}

export default ServicesTablet