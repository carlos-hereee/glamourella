import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import Buttons from "./buttons/Buttons";

const PaymentOptions = ({ required, data, click }) => {
  const { selectPaymentType } = useContext(AppContext);
  return (
    <>
      {!required && (
        <p className="required" id="required">
          <strong>Please select a payment method</strong>
        </p>
      )}
      <nav className="navbar payment-options">
        {data.map((p) => (
          // todo add toggle active
          <Buttons
            handleClick={() => selectPaymentType(p)}
            key={p.uid}
            name={p.icon}
          />
        ))}
      </nav>
      ;
    </>
  );
};

export default PaymentOptions;
