import { useContext, useState } from "react";
import PaymentMethods from "../component/organisms/PaymentMethods";
import CardHeader from "../component/molecules/card/CardHeader";
import { AppContext } from "../utils/context/AppContext";
import BagSummary from "../component/molecules/BagSummary";
import ChechoutNav from "../component/organisms/navigation/ChechoutNavigation";
import UserForm from "../component/molecules/forms/UserForm";

const Checkout = () => {
  const { checkout } = useContext(AppContext);
  const [proceedWithCheckout, setNext] = useState(false);
  const [isUserInfoReq, setUserInfo] = useState(false);

  return (
    <section className="secondary-container">
      <CardHeader data={checkout} />
      <ChechoutNav />
      {isUserInfoReq && <UserForm />}
      <BagSummary />
      {proceedWithCheckout && <PaymentMethods click={setNext} />}
    </section>
  );
};

export default Checkout;
