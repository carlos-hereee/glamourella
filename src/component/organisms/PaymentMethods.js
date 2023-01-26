import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import Buttons from "../molecules/buttons/Buttons";

const PaymentMethods = () => {
  const { paymentMethods } = useContext(AppContext);
  const handleClick = (e) => {
    console.log("e", e);
  };
  return (
    <div>
      <p>Please select a payment method</p>
      <nav className="navbar">
        {paymentMethods.map((p) => (
          <Buttons handleClick={() => handleClick(p)} key={p.uid} name={p.icon} />
        ))}
      </nav>
    </div>
  );
};

export default PaymentMethods;
