import CardHeader from "../molecules/card/CardHeader";
import ReadMore from "../molecules/ReadMore";

const CardRow = ({ data, active, click }) => {
  return (
    <button
      type="button"
      className={`card-row ${data.uid === active.uid ? "active" : ""}`}
      onClick={() => click(data, false)}>
      <CardHeader data={data} />
      {data.response && <ReadMore data={data.response} lines={2} />}
      <button
        type="button"
        className="cancel-btn"
        onClick={() => click(data, true)}>
        x
      </button>
    </button>
  );
};

export default CardRow;
