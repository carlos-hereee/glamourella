import Icons from "../atoms/Icons";
import NotificationCount from "../atoms/NotificationCount";

const SetNotificationCount = ({ count }) => {
  return (
    <>
      {count <= 9 && count > 0 && <NotificationCount num={count} />}
      {count > 9 && (
        <span className="notification-count">
          {count
            .toString()
            .split("")
            .map((n) => (
              <Icons name={n} />
            ))}
        </span>
      )}
    </>
  );
};

export default SetNotificationCount;
