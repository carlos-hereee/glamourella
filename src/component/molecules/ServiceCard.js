import Photo from "../atoms/Photo";

const ServiceCard = ({ data, handleClick }) => {
  return (
    <div className="card">
      <Photo data={data} />
      <h3>{data.name}</h3>
      <strong className="ribbon">${data.cost}</strong>
      <p>{data.description}</p>
      <p>
        Cost: ${data.cost} for {data.length}
      </p>
      <button
        type="button"
        onClick={() => handleClick(data)}
        className="btn-primary">
        Add To Cart
      </button>
    </div>
  );
};

export default ServiceCard;
