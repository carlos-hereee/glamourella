import { useContext, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CancelRow from "../molecules/card/CancelRow";
import CartEmpty from "../molecules/empty/CartEmpty";
import CardRow from "./CardRow";

const BookingEvents = () => {
  const { removeFromCart, setActive, active, cart } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});

  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(e, active) : setCancel({});
  };
  const handleClick = (d, isCancel) => {
    isCancel ? setCancel(d) : setActive(d);
  };
  return (
    <div className="booking-events">
      {cart.length > 0 ? (
        cart.map((c) =>
          cancel.uid === c.uid ? (
            <CancelRow data={c} key={c.uid} click={cancelReq} />
          ) : (
            <CardRow data={c} key={c.uid} click={handleClick} active={active} />
          )
        )
      ) : (
        <CartEmpty link="services" />
      )}
    </div>
  );
};

export default BookingEvents;
