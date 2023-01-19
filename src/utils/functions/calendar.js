export const scrollToMeetings = () => {
  const element = document.getElementById("calendar-events");
  element.scrollIntoView({ block: "end", behavior: "smooth" });
};
