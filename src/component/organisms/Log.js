import { useContext, useEffect } from "react";
import { LogContext } from "../../utils/context/LogContext";
import HyperlinkText from "../atoms/HyperlinkText";
import Icons from "../atoms/Icons";

const Log = () => {
  const { log, removeMessageFromLog } = useContext(LogContext);

  useEffect(() => {
    if (log.length > 0) {
      const intervalId = setInterval(() => {
        const firstElem = log[0].uid;
        removeMessageFromLog(firstElem);
      }, 7000);
      return () => clearInterval(intervalId);
    }
  }, [log]);
  return (
    log.length > 0 && (
      <div className="log">
        {log.map(({ data, success, uid }) => (
          <div className="message">
            {data.isLink ? (
              <HyperlinkText
                key={uid}
                data={{ ...data, uid, responseArr: data.message.split(data.word) }}
              />
            ) : (
              <p className={!success && "error-message"} key={uid}>
                {data.message}{" "}
              </p>
            )}
            <button
              type="button"
              className="close"
              onClick={() => removeMessageFromLog(uid)}>
              <Icons name="circle" spin="pulse" size="2x" />
              <Icons name="x" />
            </button>
          </div>
        ))}
      </div>
    )
  );
};
export default Log;
