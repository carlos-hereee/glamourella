import CardHeader from "../molecules/card/CardHeader";
import CardBody from "../molecules/card/CardBody";
import AddToCart from "../molecules/AddToCart";
import RemoveFromCart from "../molecules/RemoveFromCart";

const Card = ({ data, cart }) => {
  return (
    <div className="card">
      <CardHeader data={data} />
      <CardBody data={data} />

      {data.isForSale && cart.filter((c) => c.uid === data.uid).length > 0 ? (
        <RemoveFromCart data={data} />
      ) : (
        <AddToCart data={data} />
      )}
    </div>
  );
};

export default Card;
