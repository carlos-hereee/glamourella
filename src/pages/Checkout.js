import { useContext, useState } from "react";
import PaymentMethods from "../component/organisms/PaymentMethods";
import CardHeader from "../component/molecules/card/CardHeader";
import { AppContext } from "../utils/context/AppContext";
import BagSummary from "../component/molecules/BagSummary";
import ChechoutNav from "../component/organisms/navigation/ChechoutNavigation";
import UserContact from "../component/molecules/forms/UserForm";
import { useEffect } from "react";
import { ServicesContext } from "../utils/context/ServicesContext";
import { UserContext } from "../utils/context/UserContext";
import ShippingRequired from "../component/molecules/ShippingRequired";
import ButtonNext from "../component/molecules/buttons/ButtonNext";

const Checkout = () => {
  const { checkout } = useContext(AppContext);
  const { cart } = useContext(ServicesContext);
  const { user, shippingDetails } = useContext(UserContext);
  const [proceedWithCheckout, setNext] = useState(false);
  const [isUserInfoReq, setUserInfoReq] = useState(false);
  const [isShippingInfoReq, setShippingInfoReq] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      if (cart.filter((c) => c.isBookable).length > 0 && !user.uid) {
        setUserInfoReq(true);
      } else setUserInfoReq(false);
      if (cart.filter((c) => c.isAccessory).length > 0 && !shippingDetails.uid) {
        setShippingInfoReq(true);
      } else setShippingInfoReq(false);
    } else {
      // cart is empty
      setShippingInfoReq(false);
      setUserInfoReq(false);
    }
  }, [user, cart]);

  const handleClick = (e) => {};
  return (
    <section className="secondary-container">
      <CardHeader data={checkout} />
      <ChechoutNav />
      {isUserInfoReq && <UserContact />}
      {isShippingInfoReq && <ShippingRequired />}
      {cart.length > 0 ? (
        <>
          <BagSummary />
          {!isUserInfoReq && !isShippingInfoReq && (
            <ButtonNext click={handleClick} />
          )}
        </>
      ) : (
        <p className="empty">Your cart is empty head to Services or Accessory</p>
      )}
      {proceedWithCheckout && <PaymentMethods click={setNext} />}
    </section>
  );
};

export default Checkout;
