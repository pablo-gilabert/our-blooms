import ServiceCard from "../../components/ServiceCard/ServiceCard"
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