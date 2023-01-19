import CardHeader from "./CardHeader";
import ReadMore from "../ReadMore";

const CardRow = ({ data, active, click }) => {
  return (
    <div className={`card-row-wrapper ${data.uid === active?.uid ? "active" : ""}`}>
      <button type="button" className="card-row" onClick={() => click(data)}>
        <CardHeader data={data} />
        {data.response && <ReadMore data={data.response} lines={2} />}
      </button>
      <button type="button" className="btn-cancel" onClick={() => click(data, true)}>
        x
      </button>
    </div>
  );
};

export default CardRow;
