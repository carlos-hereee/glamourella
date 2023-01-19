import { useContext } from "react";
import Container from "../component/template/Container";
import { AppContext } from "../utils/context/AppContext";
import { ServicesContext } from "../utils/context/ServicesContext";

const Services = () => {
  const { services } = useContext(AppContext);
  const { filteredServices, filterServices, isFiltered, cart } =
    useContext(ServicesContext);

  return (
    <Container
      filter={filterServices}
      filtered={filteredServices}
      isFiltered={isFiltered}
      link="booking"
      data={services}
      cart={cart.length > 0 ? cart.filter((c) => c.isBookable) : []}
    />
  );
};

export default Services;
