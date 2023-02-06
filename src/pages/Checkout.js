import { useContext, useState } from "react";
import PaymentMethods from "../component/organisms/PaymentMethods";
import CardHeader from "../component/molecules/card/CardHeader";
import { AppContext } from "../utils/context/AppContext";
import BagSummary from "../component/molecules/BagSummary";
import ChechoutNav from "../component/organisms/navigation/ChechoutNavigation";
import Booknow from "../component/molecules/forms/Booknow";
import UserCard from "../component/molecules/card/UserCard";
import { UserContext } from "../utils/context/UserContext";

const Checkout = () => {
  const { checkout } = useContext(AppContext);
  const { user, userValues, userSchema } = useContext(UserContext);
  const [proceedWithCheckout, setNext] = useState(false);
  const [isUserInfoReq, setUserInfo] = useState(false);

  const submit = (e) => console.log("e", e);
  return (
    <section className="secondary-container">
      <CardHeader data={checkout} />
      {isUserInfoReq && (
        <>
          {user.uid ? (
            <UserCard />
          ) : (
            <Booknow
              data={{ values: userValues, schema: userSchema }}
              submit={submit}
            />
          )}
        </>
      )}
      <BagSummary />
      {proceedWithCheckout ? <PaymentMethods /> : <ChechoutNav click={setNext} />}
    </section>
  );
};

export default Checkout;
