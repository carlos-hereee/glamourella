import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CardHeader from "../molecules/card/CardHeader";
import { scrollToCartItem } from "../../utils/functions/calendar";
import { UserContext } from "../../utils/context/UserContext";
import Booknow from "../molecules/forms/Booknow";
import UserCard from "../molecules/card/UserCard";
import ShippingRequired from "../molecules/ShippingRequired";
import Total from "../molecules/Total";
import BagSummary from "../molecules/BagSummary";
import PaymentOptions from "../molecules/PaymentOptions";

const PaymentMethods = () => {
  const { paymentMethods, paymentType, checkoutNow } = useContext(AppContext);
  const { cart } = useContext(ServicesContext);
  const { user, userValues, userSchema, shippingDetails } = useContext(UserContext);
  const [total, setTotal] = useState(0);
  const [shippingRequired, setShippingReq] = useState(false);
  // const [userInfoReq, setUserInfoReq] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      let cost = 0;
      cart.filter((c) => {
        if (c.isAccessory) {
          setShippingReq(true);
        }
        cost += c.cost * c.count;
        return c;
      });
      setTotal(cost);
    }
  }, [cart]);
  const handleClick = (e) => {};

  const handleSubmit = () => {
    // confirm payment data enter is correct
    if (paymentType.uid) {
      // check if user information exist
      if (paymentType.type !== "in-store") {
      } else {
        // payment type is in-store; enter all data about checkout
        checkoutNow(paymentType, user, cart);
      }
    } else scrollToCartItem({ uid: "required" });
  };
  const submit = (e) => console.log("e", e);
  return (
    <div className="card-footer">
      <BagSummary />
      <Total total={total} />
      <PaymentOptions data={paymentMethods} required={paymentType.uid} />
      {paymentType.uid && (
        <>
          <CardHeader data={paymentType} />
          {paymentType.type === "in-store" ? (
            <p>We hope to see you soon</p>
          ) : user.uid ? (
            <UserCard />
          ) : (
            <Booknow
              data={{ values: userValues, schema: userSchema }}
              submit={submit}
            />
          )}
          {shippingRequired && <ShippingRequired />}
        </>
      )}
      <button className="btn btn-green" type="button" onClick={handleSubmit}>
        Confirm
      </button>
    </div>
  );
};

export default PaymentMethods;
