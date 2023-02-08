import { useContext } from "react";
import PaymentOptions from "../molecules/PaymentOptions";
import { AppContext } from "../../utils/context/AppContext";
import { scrollToCartItem } from "../../utils/functions/calendar";
import CardHeader from "../molecules/card/CardHeader";
import InStore from "../molecules/InStore";
import { useNavigate } from "react-router-dom";

const PaymentMethods = () => {
  const { paymentMethods, paymentType } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // confirm payment data enter is correct
    if (paymentType.uid) {
      // check if user information exist
      if (paymentType.type !== "in-store") {
      } else {
        // payment type is in-store; enter all data about checkout
        navigate("/checkout-review");
      }
    } else scrollToCartItem({ uid: "required" });
  };

  const type = {
    "in-store": <InStore />,
  };

  return (
    <div className="card-footer">
      {!paymentType.uid && (
        <p className="required" id="required">
          <strong>Please select a payment method</strong>
        </p>
      )}
      <nav className="navbar payment-options">
        <h3>Payment methods</h3>
        {paymentMethods.map((p) => (
          <PaymentOptions key={p.uid} data={p} />
        ))}
      </nav>
      {paymentType.uid && (
        <>
          <CardHeader data={paymentType} />
          {type[paymentType.type]}
          <button className="btn btn-green" type="button" onClick={handleSubmit}>
            Review
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentMethods;
