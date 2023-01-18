import { useContext, useEffect } from "react";
import { LogContext } from "../../utils/context/LogContext";

const Log = () => {
  const { log, removeMessageFromLog } = useContext(LogContext);

  useEffect(() => {
    if (log.length > 0) {
      const intervalId = setInterval(() => {
        const firstElem = log[0].uid;
        removeMessageFromLog(firstElem);
        // removeMessageFromLog(firstElem);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [log, removeMessageFromLog]);
  return (
    log.length > 0 && (
      <div className="log">
        {log.map((l) => (
          <p className={`message ${!l.success && "error-message"}`} key={l.uid}>
            {l.message}{" "}
          </p>
        ))}
      </div>
    )
  );
};
export default Log;
