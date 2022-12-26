import CardHeader from "../molecules/card/CardHeader";
import ReadMore from "../molecules/ReadMore";

const CardRow = ({ data, handleClick }) => {
  return (
    <div className="checkout-card">
      <div className="checkout-wrapper">
        <CardHeader data={data} />
        <p>{data.response}</p>
      </div>
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => handleClick(data, false)}>
          Find next open appointment
        </button>
        <button
          type="button"
          className="cancel-btn"
          onClick={() => handleClick(data, true)}>
          x
        </button>
      </div>
    </div>
  );
};

export default CardRow;
