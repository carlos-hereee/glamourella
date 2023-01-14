import CardHeader from "../molecules/card/CardHeader";
// import ReadMore from "../molecules/ReadMore";

const CardRow = ({ data, click }) => {
  return (
    <div className="card-row">
      <div className="checkout-wrapper">
        <CardHeader data={data} />
        <p>{data.response}</p>
      </div>
      <div className="card-row-footer">
        <button
          type="button"
          className="search-btn"
          onClick={() => click(data, false)}>
          Find next open appointment
        </button>
        <button
          type="button"
          className="cancel-btn"
          onClick={() => click(data, true)}>
          x
        </button>
      </div>
    </div>
  );
};

export default CardRow;
