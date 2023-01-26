import { useContext } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import AccessoryDetails from "../atoms/AccessoryDetails";
import Cost from "../atoms/Cost";
import MeetingDetails from "../atoms/MeetingDetails";
import CardHeader from "./card/CardHeader";

const InStorePurchase = () => {
  const { cart } = useContext(ServicesContext);
  return (
    <div className="secondary-card-section">
      <CardHeader
        data={{ title: "Payment type: In Store", subtitle: "Summary Details" }}
      />
      {cart.map((c) => (
        <div className="card-section-row" key={c.uid}>
          {c.isAccessory ? (
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
