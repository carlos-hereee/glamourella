import Photo from "../atoms/Photo";
import ReadMore from "./ReadMore";

const CheckoutCard = ({ data }) => {
  return (
    <div className="checkout-card">
      <div className="card-header">
        <Photo data={data} />
        <h2>{data.type}</h2>
      </div>
      <div className="card-body">
        <ReadMore data={data.description} lines={4} />
      </div>
      <div className="card-footer">
        <button className="btn-primary">Book Now!</button>
      </div>
    </div>
  );
};

export default CheckoutCard;
