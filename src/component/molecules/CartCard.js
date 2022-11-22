import ReadMore from "./ReadMore";

const CartCard = ({ data }) => {
  // console.log("data", data);
  return (
    <div className="card">
      <h4>
        {data.name} {data.type}
      </h4>
      <ReadMore data={data.description} />
    </div>
  );
};

export default CartCard;
