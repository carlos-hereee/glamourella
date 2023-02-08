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
  const { checkout, readyCheckout } = useContext(AppContext);
  const { cart } = useContext(ServicesContext);
  const { user, shippingDetails } = useContext(UserContext);
  const [proceedWithCheckout, setNext] = useState(false);
  const [isUserInfoReq, setUserInfoReq] = useState(false);
  const [isShippingReq, setShippingInfoReq] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      if (cart.filter((c) => c.isBookable).length > 0) {
        setUserInfoReq(true);
      } else setUserInfoReq(false);
      if (cart.filter((c) => c.isAccessory).length > 0) {
        setShippingInfoReq(true);
      } else setShippingInfoReq(false);
    } else {
      // cart is empty
      setShippingInfoReq(false);
      setUserInfoReq(false);
    }
  }, [user, cart]);

  return (
    <section className="secondary-container">
      <CardHeader data={checkout} />
      <ChechoutNav />
      {isUserInfoReq && <UserContact />}
      {isShippingReq && <ShippingRequired />}
      {cart.length > 0 ? (
        <>
          <BagSummary />
          {isUserInfoReq
            ? isShippingReq
              ? user.uid && shippingDetails.uid && <ButtonNext click={setNext} />
              : user.uid &&
                cart.every((c) => c.isBooked) &&
                !proceedWithCheckout && <ButtonNext click={setNext} />
            : ""}
        </>
      ) : (
        <p className="empty">Your cart is empty head to Services or Accessory</p>
      )}
      {proceedWithCheckout && <PaymentMethods click={setNext} />}
    </section>
  );
};

export default Checkout;
