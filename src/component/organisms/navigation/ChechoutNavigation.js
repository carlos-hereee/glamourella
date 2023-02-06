import { useContext } from "react";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import ButtonLinkNavigation from "../../molecules/buttons/ButtonLinkNavigation";

const ChechoutNavigation = () => {
  const { cart } = useContext(ServicesContext);

  return (
    <div className="checkout-navigation">
      <ButtonLinkNavigation links={["services", "accessories"]} />
      {!cart.length > 0 && (
        <p className="empty">Your cart is empty head to Services or Accessory</p>
      )}
    </div>
  );
};

export default ChechoutNavigation;
