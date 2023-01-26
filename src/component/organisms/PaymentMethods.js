import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import Buttons from "../molecules/buttons/Buttons";
import InStorePurchase from "../molecules/InStorePurchase";

const PaymentMethods = () => {
  const { paymentMethods, selectPaymentType, paymentType } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const { cart } = useContext(ServicesContext);

  useEffect(() => {
    if (cart.length > 0) {
      let cost = cart.reduce((a, b) => {
        return a + b.cost;
      }, 0);
      setTotal(cost);
    }
  }, [cart]);
  const handleClick = (e) => {
    selectPaymentType(e);
  };

  const payment = {
    "in-store": <InStorePurchase />,
  };
  return (
    <div className="card-footer">
      <p>Please select a payment method</p>
      <nav className="navbar">
        {paymentMethods.map((p) => (
          <Buttons handleClick={() => handleClick(p)} key={p.uid} name={p.icon} />
        ))}
      </nav>
      {paymentType.uid && payment[paymentType.type]}
      <h3 className="total">Total ${total}</h3>
    </div>
  );
};

export default PaymentMethods;
