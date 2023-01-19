import CardHeader from "./CardHeader";
import ReadMore from "../ReadMore";
import { useContext } from "react";
import { ServicesContext } from "../../../utils/context/ServicesContext";
import Cost from "../../atoms/Cost";
import ButtonCancel from "../../atoms/buttons/ButtonCancel";

const CardRow = ({ data, click }) => {
  const { active } = useContext(ServicesContext);
  // console.log("data", data);
  return (
    <div className={`card-row-wrapper ${data.uid === active?.uid ? "active" : ""}`}>
      <ButtonCancel data={data} click={click} />
      <button type="button" className="card-row" onClick={() => click(data)}>
        <CardHeader data={data} />
        {data.response && <ReadMore data={data.response} lines={2} />}
      </button>
      {data.cost && <Cost cost={data.cost} />}
    </div>
  );
};

export default CardRow;
