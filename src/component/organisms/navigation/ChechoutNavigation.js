import { useContext } from "react";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import { scrollToCartItem } from "../../../utils/functions/calendar";
import ButtonLinkNavigation from "../../molecules/buttons/ButtonLinkNavigation";

const ChechoutNavigation = ({ click }) => {
  const { cart, bookingRequired } = useContext(ServicesContext);
  const handleClick = () => {
    const isBookingRequired = cart.filter((c) => c.isBookable && !c.isBooked);
    if (isBookingRequired.length > 0) {
      click(false);
      isBookingRequired.forEach((br) => {
        const idx = cart.findIndex((c) => c.uid === br.uid);
        if (idx !== -1) {
          bookingRequired(idx, br);
        }
      });
      // scroll to first instance
      scrollToCartItem(isBookingRequired[0]);
    } else click(true);
  };
  return (
    <div className="checkout-navigation">
      <ButtonLinkNavigation links={["services", "accessories"]} />
      {cart.length > 0 ? (
        <button type="button" className="btn btn-classic" onClick={handleClick}>
          Verify Information
        </button>
      ) : (
        <p className="empty">Your cart is empty head to Services or Accessory</p>
      )}
    </div>
  );
};

export default ChechoutNavigation;
