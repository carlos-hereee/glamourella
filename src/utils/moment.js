import moment from "moment/moment";

export const formatDate = (t) => moment(t).format("dddd MMM DD YYYY");
export const formatTime = (t) => moment(t).format("hh:mm a");
export const today = formatDate(new Date());
export const isDateEqual = (date, events) => {
  let match = events.filter((event) => event.title === date);
  if (match.length > 0) return match[0].list.filter((l) => l.isOpen);
  return [];
};
