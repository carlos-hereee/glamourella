import { useContext } from "react";
import { LogContext } from "../../utils/context/LogContext";

const Log = () => {
  const { log } = useContext(LogContext);
  return (
    <div className="log">
      {log.length > 0 && log.map((l) => <span key={l.uid}>{l.message} </span>)}
    </div>
  );
};
export default Log;
