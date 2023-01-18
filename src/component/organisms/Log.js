import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";

const Log = () => {
  const { log } = useContext(AppContext);
  return (
    <div className="log">
      {log.length > 0 && log.map((l) => <span key={l.uid}>{l.message} </span>)}
    </div>
  );
};
export default Log;
