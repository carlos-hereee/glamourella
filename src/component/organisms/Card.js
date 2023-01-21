import CardHeader from "../molecules/card/CardHeader";
import CardBody from "../molecules/card/CardBody";
import ForSaleBtn from "../molecules/buttons/ForSaleBtn";

const Card = ({ data }) => {
  return (
    <div className="card">
      <CardHeader data={data} />
      <CardBody data={data} />
      {data.isForSale && <ForSaleBtn data={data} />}
    </div>
  );
};

export default Card;
