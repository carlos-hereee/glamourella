import CardSectionHeader from "./CardSectionHeader";
import SecondaryCardBody from "./SecondaryCardBody";

const SecondaryCard = ({ data }) => (
  <div className="secondary-card">
    <CardSectionHeader data={data} />
    <div className="secondary-card-body">
      {!data.isListEmpty &&
        data.list.map((sl) => <SecondaryCardBody data={sl} key={sl.uid} />)}
    </div>
  </div>
);
export default SecondaryCard;
