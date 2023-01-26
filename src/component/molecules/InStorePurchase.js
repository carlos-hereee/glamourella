import { useContext } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import AccessoryDetails from "../atoms/AccessoryDetails";
import Cost from "../atoms/Cost";
import MeetingDetails from "../atoms/MeetingDetails";
import CardHeader from "./card/CardHeader";
import * as yup from "yup";
import Field from "../organisms/Field";

const schema = yup.object().shape({ quantity: yup.number() });
const values = { quantity: 1 };
const InStorePurchase = () => {
  const { cart, quantityChange } = useContext(ServicesContext);

  const handleSubmit = (quantity, item) => console.log("e", quantity, item);
  const handleChange = (quantity, item) => console.log("e", quantity, item);
  return (
    <div className="secondary-card-section">
      <CardHeader
        data={{ title: "Payment type: In Store", subtitle: "Summary Details" }}
      />
      <div className="card-section-wrapper">
        {cart.map((c) => (
          <div className="card-section-row" key={c.uid}>
            {c.isAccessory ? (
              <AccessoryDetails data={c} />
            ) : (
              <MeetingDetails meeting={c.meeting} />
            )}
            {c.isAccessory && (
              <Field
                data={{ values, schema }}
                submit={(e) => handleSubmit(e, c)}
                max={c.inStock}
                change={(e) => handleChange(e, c)}
              />
            )}
            <Cost cost={c.cost} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InStorePurchase;
