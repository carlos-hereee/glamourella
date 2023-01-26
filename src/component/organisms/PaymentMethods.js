import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import Buttons from "../molecules/buttons/Buttons";
import InStorePurchase from "../molecules/InStorePurchase";

const PaymentMethods = () => {
  const { paymentMethods, selectPaymentType, paymentType } = useContext(AppContext);
  const handleClick = (e) => {
    selectPaymentType(e);
  };

  const payment = {
    "in-store": <InStorePurchase />,
  };
  return (
    <div>
      <p>Please select a payment method</p>
      <nav className="navbar">
        {paymentMethods.map((p) => (
          <Buttons handleClick={() => handleClick(p)} key={p.uid} name={p.icon} />
        ))}
      </nav>
      {paymentType.uid && payment[paymentType.type]}
    </div>
  );
};

export default PaymentMethods;
