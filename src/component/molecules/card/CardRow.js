import CardHeader from "./CardHeader";
import ReadMore from "../ReadMore";
import { useContext } from "react";
import { ServicesContext } from "../../../utils/context/ServicesContext";

const CardRow = ({ data, active, click }) => {
  const { booked } = useContext(ServicesContext);
  console.log("data", data);
  return (
    <div className={`card-row-wrapper ${data.uid === active?.uid ? "active" : ""}`}>
      <button type="button" className="card-row" onClick={() => click(data)}>
        <CardHeader data={data} />
        {data.response && <ReadMore data={data.response} lines={2} />}
      </button>
      {data.cost && (
        <p className="cost">
          <strong>Cost: ${data.cost}</strong>
        </p>
      )}
      {data.isBookable && <p>is bookable and needs to be booked before </p>}
      <button type="button" className="btn-cancel" onClick={() => click(data, true)}>
        x
      </button>
    </div>
  );
};

export default CardRow;
