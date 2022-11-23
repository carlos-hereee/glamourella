import Photo from "../atoms/Photo";
import ReadMore from "./ReadMore";

const CheckoutCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.type}</h2>
        <Photo data={data} />
      </div>
      <div className="card-body">
        <ReadMore data={data.description} lines={4} />
      </div>
      <strong className="ribbon">${data.cost}</strong>
    </div>
  );
};

export default CheckoutCard;
