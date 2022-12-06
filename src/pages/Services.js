import { useContext } from "react";
import Buttons from "../component/molecules/Buttons";
import ServiceCard from "../component/molecules/ServiceCard";
import { GlamourellaContext } from "../utils/context/GlamourellaContext";
import { ServicesContext } from "../utils/context/ServicesContext";

const Services = () => {
  const { services } = useContext(GlamourellaContext);
  const { addToCart, filteredServices, filterServices, isFiltered } =
    useContext(ServicesContext);

  const handleClick = (e) => addToCart(e, true);
  const filterClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("");
    filterServices(services, content.toLowerCase());
  };
  const service = ["all", "manicure", "pedicure"];
  return (
    <section className="container">
      <div className="card-container">
        <nav className="navbar">
          {service.map((s) => (
            <Buttons name={s} key={s} handleClick={filterClick} />
          ))}
        </nav>
        <div className="service">
          {isFiltered
            ? filteredServices.map((fs) => (
                <ServiceCard data={fs} key={fs.uid} handleClick={handleClick} />
              ))
            : services.map((s) => (
                <ServiceCard data={s} key={s.uid} handleClick={handleClick} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
