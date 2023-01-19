import { useContext, useEffect } from "react";
import { LogContext } from "../../utils/context/LogContext";
import HyperlinkText from "../atoms/HyperlinkText";

const Log = () => {
  const { log, removeMessageFromLog } = useContext(LogContext);

  useEffect(() => {
    if (log.length > 0) {
      const intervalId = setInterval(() => {
        const firstElem = log[0].uid;
        removeMessageFromLog(firstElem);
        // removeMessageFromLog(firstElem);
      }, 7000);
      return () => clearInterval(intervalId);
    }
  }, [log]);
  return (
    log.length > 0 && (
      <div className="log">
        {log.map(({ data, success, uid }) =>
          data.isLink ? (
            <HyperlinkText
              key={uid}
              data={{ ...data, uid, responseArr: data.message.split(data.word) }}
            />
          ) : (
            <p className={`message ${!success && "error-message"}`} key={uid}>
              {data.message}{" "}
            </p>
          )
        )}
      </div>
    )
  );
};
export default Log;
