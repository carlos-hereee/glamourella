import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import Buttons from "../molecules/buttons/Buttons";
import AccessoryDetails from "../atoms/AccessoryDetails";
import MeetingDetails from "../atoms/MeetingDetails";
import Cost from "../atoms/Cost";
import Field from "./Field";
import CardHeader from "../molecules/card/CardHeader";
import * as yup from "yup";
import { scrollToCartItem } from "../../utils/functions/calendar";
import { UserContext } from "../../utils/context/UserContext";
import Booknow from "../molecules/forms/Booknow";
import UserCard from "../molecules/card/UserCard";
import ShippingRequired from "../molecules/ShippingRequired";
import Total from "../molecules/Total";

const schema = yup.object().shape({ quantity: yup.number() });
const values = { quantity: 1 };

const PaymentMethods = () => {
  const { paymentMethods, selectPaymentType, paymentType, checkoutNow } =
    useContext(AppContext);
  const { cart, onQuantityChange } = useContext(ServicesContext);
  const { user, userValues, userSchema, shippingDetails } = useContext(UserContext);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
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
  useEffect(() => {
    // find out sales tax
    if (total) {
      setTaxes(total * 0.0625);
    } else setTaxes(0);
  }, [total]);
  const handleClick = (e) => {
    selectPaymentType(e);
  };

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
      <div className="card-section-wrapper">
        <h3>Bag Summary</h3>
        {cart.map((c) => (
          <div className="card-section-row" key={c.uid}>
            {c.isAccessory ? (
              <AccessoryDetails data={c} />
            ) : (
              <div className="details-wrapper">
                <div className="details">
                  <CardHeader data={c} />
                  <MeetingDetails data={c} meeting={c.meeting} />
                </div>
              </div>
            )}
            <div className="card-section-cost">
              {c.isAccessory && (
                <Field
                  data={{ values, schema }}
                  max={c.inStock}
                  change={({ target }) => onQuantityChange(target.value, c)}
                />
              )}
              {c.cost && c.count && <Cost cost={c.cost * c.count} />}
            </div>
          </div>
        ))}
      </div>
      {!paymentType.uid && (
        <p className="required" id="required">
          <strong>Please select a payment method</strong>
        </p>
      )}
      <nav className="navbar">
        {paymentMethods.map((p) => (
          // todo add toggle active
          <Buttons handleClick={() => handleClick(p)} key={p.uid} name={p.icon} />
        ))}
      </nav>
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
      <Total total={total} taxes={taxes} />
      <button className="btn btn-green" type="button" onClick={handleSubmit}>
        Confirm
      </button>
    </div>
  );
};

export default PaymentMethods;
