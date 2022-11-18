const CartCard = ({ data, handleClick }) => {
  return (
    <div className="card">
      <h4>
        {data.name} {data.type}
      </h4>
      <p className="read-more">{data.description}</p>
    </div>
  );
};

export default CartCard;
