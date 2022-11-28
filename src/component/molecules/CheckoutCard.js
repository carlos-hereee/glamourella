import Photo from "../atoms/Photo";
import ReadMore from "./ReadMore";

const CheckoutCard = ({ data }) => {
  return (
    <div className="checkout-card">
      <div className="card-header">
        <Photo data={data} />
        <h2>{data.type}</h2>
        <ReadMore data={data.description} lines={2} />
      </div>
      <div className="card-body">
        <p>Our next avalible appointment is ....</p>
        <p>Price: ${data.cost}</p>
        <button className="btn-primary">Book Now!</button>
      </div>
    </div>
  );
};

export default CheckoutCard;
