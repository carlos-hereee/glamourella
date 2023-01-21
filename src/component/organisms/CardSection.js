import CardSectionBody from "../atoms/CardSectionBody";
import CardSectionHeader from "../molecules/card/CardSectionHeader";

const CardSection = ({ data }) => {
  return (
    <div className="card-section">
      <CardSectionHeader data={data} />
      {data.response && <CardSectionBody data={data} />}
    </div>
  );
};

export default CardSection;
