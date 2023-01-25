import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";

const PaymentMethods = () => {
  const { paymentMethods } = useContext(AppContext);
  return <div>PaymentMethods</div>;
};

export default PaymentMethods;
