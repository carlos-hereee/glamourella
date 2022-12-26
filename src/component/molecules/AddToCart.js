const AddToCart = ({ data, click }) => {
  return (
    <>
      <strong className="ribbon">${data.cost}</strong>
      <button type="button" className="btn-primary" onClick={() => click(data)}>
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
