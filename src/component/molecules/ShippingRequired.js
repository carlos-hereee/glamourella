import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import Forms from "../organisms/Forms";
import ShippingDetails from "./details/ShippingDetails";

const ShippingRequired = () => {
  const { shippingValues, shippingSchema, shippingDetails } =
    useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    console.log("e", e);
  };
  console.log("shipping", shippingValues);
  console.log(shippingDetails);
  return shippingDetails.uid ? (
    <ShippingDetails data={shippingDetails} />
  ) : (
    <div>
      <button
        type="button"
        className="btn btn-step"
        onClick={() => setIsOpen(!isOpen)}>
        Shipping Address
      </button>
      <Forms
        data={{ values: shippingValues, schema: shippingSchema }}
        submit={handleSubmit}
      />
    </div>
  );
};

export default ShippingRequired;
