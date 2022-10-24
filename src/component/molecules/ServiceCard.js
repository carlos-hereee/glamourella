const ServiceCard = ({ data }) => {
  return (
    <div className="card">
      <h4>
        {data.name} {data.type}
      </h4>
      <p>{data.description}</p>
      <p>
        Cost: ${data.cost} for {data.length}
      </p>
    </div>
  );
};

export default ServiceCard;
