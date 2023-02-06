import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { UserContext } from "../../utils/context/UserContext";
import { scrollToCartItem } from "../../utils/functions/calendar";
import Forms from "../organisms/Forms";
import Buttons from "./buttons/Buttons";
import CardHeader from "./card/CardHeader";
import UserCard from "./card/UserCard";

const PaymentOptions = () => {
  const { selectPaymentType, paymentMethods, paymentType, checkoutNow } =
    useContext(AppContext);
  const { cart } = useContext(ServicesContext);
  const { user, userValues, userSchema, shippingDetails } = useContext(UserContext);

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
    <>
      {!paymentType.uid && (
        <p className="required" id="required">
          <strong>Please select a payment method</strong>
        </p>
      )}
      <nav className="navbar payment-options">
        {paymentMethods.map((p) => (
          // todo add toggle active
          <Buttons
            handleClick={() => selectPaymentType(p)}
            key={p.uid}
            name={p.icon}
          />
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
            <Forms
              data={{ values: userValues, schema: userSchema }}
              submit={submit}
            />
          )}
          <button className="btn btn-green" type="button" onClick={handleSubmit}>
            Confirm
          </button>
        </>
      )}
    </>
  );
};

export default PaymentOptions;
