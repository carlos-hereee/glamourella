import { useContext } from "react";
import ServiceCard from "../component/molecules/ServiceCard";
import { ServicesContext } from "../utils/context/ServicesContext";

const Services = () => {
  const { services, addToCart, cart } = useContext(ServicesContext);
  const handleClick = (e) => addToCart(e);
  return (
    <main className="container">
      {services &&
        services.map((s) => (
          <ServiceCard data={s} key={s.uid} handleClick={handleClick} />
        ))}
    </main>
  );
};

export default Services;
