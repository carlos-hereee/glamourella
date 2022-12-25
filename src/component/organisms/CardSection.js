import CardSectionBody from "../atoms/CardSectionBody";
import CardSectionHeader from "../molecules/card/CardSectionHeader";

const CardSection = ({ data }) => {
  return (
    <div className="card-sectioresponsive n">
      <CardSectionHeader data={data} />
      <CardSectionBody data={data} />
    </div>
  );
};

export default CardSection;
