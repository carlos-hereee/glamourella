import Cost from "../../atoms/Cost";
import CardSection from "../../organisms/CardSection";
import ReadMore from "../../molecules/ReadMore";

const ButtonRow = ({ data, click }) => {
  return (
    <button type="button" className="card-row" onClick={() => click(data)}>
      <CardSection data={data} />
      {data.response && <ReadMore />}
      {data.cost && <Cost cost={data.cost} />}
    </button>
  );
};
export default ButtonRow;
