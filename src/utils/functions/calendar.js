export const scrollToMeetings = () => {
  const element = document.getElementById("calendar-events");
  element.scrollIntoView({ block: "start", behavior: "smooth" });
};
