import Hero from "../atoms/Hero";
import CardHeader from "../molecules/card/CardHeader";
import ReadMore from "../molecules/ReadMore";

const Card = ({ data, click }) => {
  return (
    <div className="card">
      {/* <div className="checkout-wrapper">
        <div className="checkout-title">
          <h3>{data.type}</h3>
          <Hero data={data} />
        </div>
        <div className="checkout-description">
          <ReadMore data={data.description} lines={2} />
        </div>
      </div> */}
      {/* <CardHeader data={}/> */}
      {/* <button className="checkout-btn" onClick={() => click(data)}>
        Find next availible appointment
      </button> */}
      {
        // TODO: REMOVE ITEM FROM CART
      }
      {/* <button className="cancel-btn" onClick={() => click(data)}>
        x
      </button> */}
    </div>
  );
};

export default Card;
