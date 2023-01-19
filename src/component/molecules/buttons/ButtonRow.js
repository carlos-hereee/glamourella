import Cost from "../../atoms/Cost";
import CardSection from "../../organisms/CardSection";

const ButtonRow = ({ data, click }) => {
  return (
    <button type="button" className="card-row" onClick={() => click(data)}>
      <CardSection data={data} />
      {data.cost && <Cost cost={data.cost} />}
    </button>
  );
};
export default ButtonRow;
