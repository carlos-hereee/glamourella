// import ReadMore from "../molecules/ReadMore";
import CardHeader from "./CardHeader";

const CancelRow = ({ data, click }) => {
  return (
    <div className="cancel-row">
      <p>Are you sure you want to cancel</p>
      <p>This will delete all progress</p>
      <div className="cancel-row-footer">
        <button
          type="button"
          className="back-btn"
          onClick={() => click(data, false)}>
          Back
        </button>
        <button
          type="button"
          className="green-btn"
          onClick={() => click(data, true)}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CancelRow;
