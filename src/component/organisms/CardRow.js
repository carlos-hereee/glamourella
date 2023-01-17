import CardHeader from "../molecules/card/CardHeader";
import ReadMore from "../molecules/ReadMore";

const CardRow = ({ data, active, click }) => {
  return (
    <div className={`card-row-wrapper ${data.uid === active.uid ? "active" : ""}`}>
      <button type="button" className="card-row" onClick={() => click(data)}>
        <CardHeader data={data} />
        {data.response && <ReadMore data={data.response} lines={2} />}
      </button>
      <button type="button" className="cancel-btn" onClick={() => click(data, true)}>
        x
      </button>
    </div>
  );
};

export default CardRow;
