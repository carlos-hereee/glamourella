import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import AccessoryDetails from "../atoms/AccessoryDetails";
import Cost from "../atoms/Cost";
import MeetingDetails from "../atoms/MeetingDetails";

const InStorePurchase = () => {
  const { paymentType } = useContext(AppContext);
  const { cart } = useContext(ServicesContext);
  return (
    <div className="secondary-card-section">
      <h3>Payment type: {paymentType.name}</h3>
      <h4>Details: </h4>
      {cart.map((c) => (
        <div className="card-section-row" key={c.uid}>
          {c.isAccessories ? (
            <AccessoryDetails data={c.meeting} />
          ) : (
            <MeetingDetails meeting={c.meeting} />
          )}
          <Cost cost={c.cost} />
        </div>
      ))}
    </div>
  );
};

export default InStorePurchase;
