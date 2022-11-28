const EventCard = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default EventCard;
