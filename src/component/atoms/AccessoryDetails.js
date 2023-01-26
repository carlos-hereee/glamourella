import CardHeader from "../molecules/card/CardHeader";
import ReadMore from "../molecules/ReadMore";

const AccessoryDetails = ({ data }) => (
  <div className="details">
    <CardHeader data={data} />
    <ReadMore data={data.response} />
  </div>
);
export default AccessoryDetails;
