import moment from "moment/moment";

export const formatDate = (t) => moment(t).format("dddd MMM DD YYYY");
export const formatTime = (t) => moment(t).format("hh:mm a");
export const formatMilli = (t) => moment(t).valueOf();
export const today = formatDate(new Date());
export const dateEqual = (date, events) => {
  return events.filter((event) => event.title === date)[0];
};
export const setEarliestApp = (date, cb) => {
  const min = date.list.reduce((a, b) => {
    return a.isOpen && a.time.startTime > b.time.startTime ? a : b;
  });
  cb(min);
};
export const getMeetingList = (arr) => {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current.hasList && formatMilli(current.title) >= formatMilli(today)) {
      const hasList = current.list.filter((l) => l.isOpen);
      filtered.push(current);
      filtered[filtered.length - 1].list = hasList;
    }
  }
  return filtered;
};
