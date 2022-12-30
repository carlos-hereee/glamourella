import moment from "moment/moment";

export const formatDate = (t) => moment(t).format("dddd MMM DD YYYY");
export const formatTime = (t) => moment(t).format("hh:mm a");
export const today = formatDate(new Date());
export const isDateEqual = (date, events) => {
  return events.filter((e) => {
    return formatDate(e.start) === date && !e.attendees;
  });
};
