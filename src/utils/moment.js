import moment from "moment/moment";

export const formatDate = (t) => moment(t).format("dddd MMM DD YYYY");
export const formatTime = (t) => moment(t).format("hh:mm a");
export const today = formatDate(new Date());
