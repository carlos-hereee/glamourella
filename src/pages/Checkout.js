import { useContext, useState, useEffect } from "react";
import PaymentMethods from "../component/organisms/PaymentMethods";
import CardHeader from "../component/molecules/card/CardHeader";
import { AppContext } from "../utils/context/AppContext";
import BagSummary from "../component/molecules/BagSummary";
import ChechoutNav from "../component/organisms/navigation/ChechoutNavigation";
import UserContact from "../component/molecules/forms/UserForm";
import { ServicesContext } from "../utils/context/ServicesContext";
import { UserContext } from "../utils/context/UserContext";
import ShippingRequired from "../component/molecules/ShippingRequired";
import ButtonNext from "../component/molecules/buttons/ButtonNext";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import Total from "../component/molecules/Total";

const Checkout = () => {
  const { checkout } = useContext(AppContext);
  const { cart, setTotal, total } = useContext(ServicesContext);
  const { user, shippingDetails } = useContext(UserContext);
  const [proceedWithCheckout, setNext] = useState(false);
  const [isUserInfoReq, setUserInfoReq] = useState(false);
  const [isShippingReq, setShippingInfoReq] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      let cost = 0;
      let isBookable = false;
      let isAccessory = false;
      cart.filter((c) => {
        if (c.isBookable) {
          isBookable = true;
        }
        if (isAccessory) {
          isBookable = true;
        }
        cost += c.cost * c.count;
        return c;
      });
      setUserInfoReq(isBookable);
      setShippingInfoReq(isAccessory);
      setTotal(cost);
    } else {
      // cart is empty
      setShippingInfoReq(false);
      setUserInfoReq(false);
      setTotal(0);
    }
  }, [user, cart]);

  return (
    <section className="secondary-container">
      <CardHeader data={checkout} />
      <ChechoutNav />
      {isUserInfoReq && <UserContact />}
      {isShippingReq && <ShippingRequired />}
      {cart.length > 0 ? <BagSummary /> : <CartEmpty />}
      {total > 0 && <Total total={total} />}
      {isUserInfoReq
        ? isShippingReq
          ? user.uid && shippingDetails.uid && <ButtonNext click={setNext} />
          : user.uid &&
            cart.every((c) => c.isBooked) &&
            !proceedWithCheckout && <ButtonNext click={setNext} />
        : ""}
      {proceedWithCheckout && <PaymentMethods click={setNext} />}
    </section>
  );
};

export default Checkout;
