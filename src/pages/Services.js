import { useContext } from "react";
import Buttons from "../component/atoms/Buttons";
import ServiceCard from "../component/molecules/ServiceCard";
import { ServicesContext } from "../utils/context/ServicesContext";

const Services = () => {
  const { services, addToCart, filteredServices, filterServices, isFiltered } =
    useContext(ServicesContext);
  const handleClick = (e) => addToCart(e);
  const filterClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("");
    filterServices(services, content.toLowerCase());
  };
  const service = ["all", "manicure", "pedicure"];
  return (
    <main className="container">
      <div className="card-container">
        <nav className="navbar">
          {service.map((s) => (
            <Buttons name={s} key={s} handleClick={filterClick} />
          ))}
        </nav>
        <div className="services">
          {isFiltered
            ? filteredServices.map((fs) => (
                <ServiceCard data={fs} key={fs.uid} handleClick={handleClick} />
              ))
            : services.map((s) => (
                <ServiceCard data={s} key={s.uid} handleClick={handleClick} />
              ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
