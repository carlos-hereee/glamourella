import { useContext } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import AccessoryDetails from "../atoms/AccessoryDetails";
import Cost from "../atoms/Cost";
import MeetingDetails from "../atoms/MeetingDetails";
import CardHeader from "./card/CardHeader";
import * as yup from "yup";
import FieldQuantity from "../organisms/Field";

const schema = yup.object().shape({ quantity: yup.number() });
const values = { quantity: 1 };
const BagSummary = () => {
  const { cart, onQuantityChange } = useContext(ServicesContext);
  return (
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
              <FieldQuantity
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
  );
};

export default BagSummary;
