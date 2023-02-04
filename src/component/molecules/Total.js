const Total = ({ taxes, total }) => {
  return (
    <div className="sub-total">
      <p>Sub Total: ${total}</p>
      <p>Taxes ${taxes}</p>
      <p>
        <strong>Total ${total + taxes}</strong>
      </p>
    </div>
  );
};

export default Total;
