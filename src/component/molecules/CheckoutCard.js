import Photo from "../atoms/Photo";
import ReadMore from "./ReadMore";

const CheckoutCard = ({ data }) => {
  return (
    <div className="checkout-card">
      <div className="checkout-title">
        <h3>{data.type}</h3>
        <Photo data={data} />
      </div>
      <div className="checkout-description">
        <ReadMore data={data.description} lines={2} />
      </div>
      <button className="btn-checkout">Find next availible appointment</button>
    </div>
  );
};

export default CheckoutCard;
