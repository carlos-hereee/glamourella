import { useContext } from "react";
import Container from "../component/template/Container";
import { AppContext } from "../utils/context/AppContext";
import { ServicesContext } from "../utils/context/ServicesContext";

const Services = () => {
  const { services } = useContext(AppContext);
  const { addToCart, filteredServices, filterServices, isFiltered } =
    useContext(ServicesContext);

  return (
    <Container
      filter={filterServices}
      filtered={filteredServices}
      isFiltered={isFiltered}
      data={services}
      addToCart={addToCart}
    />
  );
};

export default Services;
