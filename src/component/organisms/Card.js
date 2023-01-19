import CardHeader from "../molecules/card/CardHeader";
import CardBody from "../molecules/card/CardBody";
import AddToCart from "../molecules/AddToCart";

const Card = ({ data }) => {
  return (
    <div className="card">
      <CardHeader data={data} />
      <CardBody data={data} />
      {data.isForSale && <AddToCart data={data} />}
    </div>
  );
};

export default Card;
