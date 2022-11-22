import Icons from "./Icons";

const NotificationCount = ({ num }) => (
  <span className="notification-count">{<Icons name={num} />}</span>
);
export default NotificationCount;
