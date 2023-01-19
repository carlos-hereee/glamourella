import Cost from "../../atoms/Cost";
import CardSection from "../../organisms/CardSection";

const ButtonRow = ({ data, click }) => {
  return (
    <button type="button" className="card-row" onClick={() => click(data)}>
      <CardSection data={data} />
    </button>
  );
};
export default ButtonRow;
