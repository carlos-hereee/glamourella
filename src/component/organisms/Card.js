import CardHeader from "../molecules/card/CardHeader";
import CardBody from "../molecules/card/CardBody";
import AddToCart from "../molecules/AddToCart";

const Card = ({ data, click }) => {
  return (
    <div className="card">
      <CardHeader data={data} />
      <CardBody data={data} />
      {data.isForSale && <AddToCart data={data} click={click} />}
    </div>
  );
};

export default Card;
