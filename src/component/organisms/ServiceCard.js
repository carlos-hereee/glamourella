// import Hero from "../atoms/Hero";
import CardHeader from "../molecules/card/CardHeader";

const ServiceCard = ({ data, handleClick }) => {
  // console.log("data", data);
  return (
    <div className="card">
      <strong className="ribbon">${data.cost}</strong>
      <CardHeader data={data} />
      <div className="card-body">
        <div>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
        <button
          type="button"
          onClick={() => handleClick(data)}
          className="btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
