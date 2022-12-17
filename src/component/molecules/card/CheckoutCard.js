import Photo from "../../atoms/Photo";
import ReadMore from "../ReadMore";

const CheckoutCard = ({ data, handleClick }) => {
  return (
    <div className="checkout-card">
      <div className="checkout-wrapper">
        <div className="checkout-title">
          <h3>{data.type}</h3>
          <Photo data={data} />
        </div>
        <div className="checkout-description">
          <ReadMore data={data.description} lines={2} />
        </div>
      </div>
      <button className="checkout-btn" onClick={() => handleClick(data)}>
        Find next availible appointment
      </button>
      {
        // TODO: REMOVE ITEM FROM CART
      }
      <button className="cancel-btn" onClick={() => handleClick(data)}>
        x
      </button>
    </div>
  );
};

export default CheckoutCard;
