import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import Forms from "../organisms/Forms";

const ShippingRequired = () => {
  const { shippingValues, shippingSchema } = useContext(UserContext);
  const handleSubmit = (e) => {
    console.log("e", e);
  };
  return (
    <div>
      <h3>Shipping Address</h3>
      <Forms
        data={{ values: shippingValues, schema: shippingSchema }}
        submit={handleSubmit}
      />
    </div>
  );
};

export default ShippingRequired;
