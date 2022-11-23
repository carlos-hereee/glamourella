import Photo from "../atoms/Photo";
import ReadMore from "./ReadMore";

const CheckoutCard = ({ data }) => {
  return (
    <div className="card-checkout">
      <Photo data={data} />
      <div>
        <ReadMore data={data.description} lines={4} />
      </div>
      <strong className="ribbon">${data.cost}</strong>
    </div>
  );
};

export default CheckoutCard;
