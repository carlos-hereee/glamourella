import { useContext, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CardRow from "../molecules/card/CardRow";
import CancelRow from "../molecules/card/CancelRow";
import OpenAppButton from "../atoms/buttons/OpenAppButton";
import ButtonLink from "../atoms/buttons/ButtonLink";
import { CalendarContext } from "../../utils/context/CalendarContext";
import MeetingDetails from "../atoms/MeetingDetails";

const CartItem = ({ data, link }) => {
  const { removeFromCart, setActive, active } = useContext(ServicesContext);
  const { selectedDay } = useContext(CalendarContext);
  const [cancel, setCancel] = useState({});

  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(e, active) : setCancel({});
  };
  const handleClick = (d, isCancel) => {
    isCancel ? setCancel(d) : setActive(d);
  };
  return (
    <div className="cart-container">
      {data.map((c) =>
        cancel.uid === c.uid ? (
          <CancelRow data={c} key={c.uid} click={cancelReq} />
        ) : (
          <div key={c.uid} className="row-wrapper" id={c.uid}>
            <CardRow data={c} click={handleClick} />
            {c.isBookable && link ? (
              c.isBooked && c.isBookingRequired ? (
                <MeetingDetails meeting={c.meeting} />
              ) : (
                <>
                  <p className="required">{c.bookingErr}</p>
                  <ButtonLink link={link} />
                </>
              )
            ) : (
              !selectedDay.hasList && <OpenAppButton service={c} />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default CartItem;
