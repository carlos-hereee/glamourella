import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import Forms from "../organisms/Forms";

const ShippingRequired = () => {
  const { shippingValues, shippingSchema, shippingDetails } =
    useContext(UserContext);
  const handleSubmit = (e) => {
    console.log("e", e);
  };
  console.log("shipping", shippingValues);
  console.log(shippingDetails);
  return shippingDetails.uid ? (
    <div>
      <p>{shippingDetails.firstName}</p>
      <p>{shippingDetails.lastName}</p>
      <p>{shippingDetails.streetAddress}</p>
      <p>{shippingDetails.apt}</p>
      <p>{shippingDetails.city}</p>
      <p>{shippingDetails.state}</p>
      <p>{shippingDetails.postalCode}</p>
    </div>
  ) : (
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
