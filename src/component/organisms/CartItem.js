import { useContext, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CardRow from "../molecules/card/CardRow";
import CancelRow from "../molecules/card/CancelRow";
import OpenAppButton from "../atoms/buttons/OpenAppButton";
import ButtonLink from "../atoms/buttons/ButtonLink";

const CartItem = ({ data, link }) => {
  const { removeFromCart, setActive, active } = useContext(ServicesContext);
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
          <div key={c.uid} className="row-wrapper">
            <CardRow data={c} click={handleClick} />
            {link ? <ButtonLink link={link} /> : <OpenAppButton service={c} />}
          </div>
        )
      )}
    </div>
  );
};

export default CartItem;
