const EventCard = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.date}</h2>
    </div>
  );
};

export default EventCard;
