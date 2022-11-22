import { useContext } from "react";
import Buttons from "../component/atoms/Buttons";
import ServiceCard from "../component/molecules/ServiceCard";
import { ServicesContext } from "../utils/context/ServicesContext";

const Services = () => {
  const { services, addToCart, filteredServices } = useContext(ServicesContext);
  const handleClick = (e) => addToCart(e);
  const service = ["all", "manicure", "pedicure"];
  return (
    <main className="container">
      <div className="card-container">
        <nav className="navbar">
          {service.map((s) => (
            <Buttons name={s} key={s} />
          ))}
          {/* 
          <Buttons name="all" /> 
        <Buttons name="manicure" />
      <Buttons name="pedicure" />
       */}
        </nav>
        <div>
          {services &&
            services.map((s) => (
              <ServiceCard data={s} key={s.uid} handleClick={handleClick} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
