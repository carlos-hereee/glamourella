import Photo from "../atoms/Photo";

const EventCard = ({ data }) => {
  return (
    <div className="card event-card">
      <div>
        <h3>{data.title}</h3>
      </div>
      <div className="event-body">
        {data.img && <Photo data={data.img} />}
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
