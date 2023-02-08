import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BagSummary from "../component/molecules/BagSummary";
import Total from "../component/molecules/Total";
import { AppContext } from "../utils/context/AppContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import { UserContext } from "../utils/context/UserContext";

const CheckoutReview = () => {
  const { total, cart, paymentType } = useContext(ServicesContext);
  const { readyCheckout } = useContext(AppContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cart.length || !paymentType.uid || !user.uid) {
      navigate("/checkout");
    }
  }, [cart, paymentType, user]);
  const handleClick = () => {
    readyCheckout(paymentType, user, cart);
  };
  return (
    <div className="secondary-container">
      <div className="card-header">
        <h3>Review</h3>
      </div>
      <BagSummary />
      <Total total={total} />
      <button type="button" className="btn btn-classic" onClick={handleClick}>
        Confirm
      </button>
    </div>
  );
};
export default CheckoutReview;
