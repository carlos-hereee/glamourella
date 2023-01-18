const Log = ({ data }) => (
  <p className={data.success ? "message-success" : "required"}>{data.message}</p>
);
export default Log;
