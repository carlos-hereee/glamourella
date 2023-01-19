import CardSectionBody from "../atoms/CardSectionBody";
import CardSectionHeader from "../molecules/card/CardSectionHeader";
import ReadMore from "../molecules/ReadMore";

const CardSection = ({ data }) => {
  return (
    <div className="card-section">
      <CardSectionHeader data={data} />
      {data.response && <ReadMore data={<CardSectionBody data={data} />} />}
    </div>
  );
};

export default CardSection;
