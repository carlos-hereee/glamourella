import { useContext, useEffect } from "react";
import { LogContext } from "../../utils/context/LogContext";
import HyperlinkText from "../atoms/HyperlinkText";
import Icons from "../atoms/Icons";

const Log = () => {
  const { log, removeMessageFromLog } = useContext(LogContext);

  // useEffect(() => {
  //   if (log.length > 0) {
  //     const intervalId = setInterval(() => {
  //       const firstElem = log[0].uid;
  //       removeMessageFromLog(firstElem);
  //     }, 5000);
  //     return () => clearInterval(intervalId);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [log]);
  return (
    log.length > 0 && (
      <div className="log">
        {log.map(({ data, success, uid }) => (
          <div className="message" key={uid}>
            {data.isLink ? (
              <HyperlinkText
                data={{ ...data, uid, responseArr: data.message.split(data.word) }}
              />
            ) : (
              <p className={!success && "error-message"}>{data.message} </p>
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
