import { useContext } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";

const AddToCart = ({ data }) => {
  const { addToCart, cart } = useContext(ServicesContext);
  return (
    <>
      <strong className="ribbon">${data.cost}</strong>
      <button
        type="button"
        className="btn-primary"
        onClick={() => addToCart(cart, data)}>
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
