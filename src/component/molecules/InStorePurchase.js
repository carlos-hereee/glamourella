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
  const { cart, onQuantityChange } = useContext(ServicesContext);

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
                max={c.inStock}
                change={({ target }) => onQuantityChange(target.value, c)}
              />
            )}
            {c.cost && c.count && <Cost cost={c.cost * c.count} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InStorePurchase;
