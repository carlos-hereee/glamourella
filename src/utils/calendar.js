import { gapi } from "gapi-script";

export const addEvent = (calendarID, event, accessToken) => {
  function initiate() {
    gapi.client
      .request({
        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/${event.id}`,
        method: "POST",
        body: event,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(
        (response) => {
          console.log("response", response);
          return [true, response];
        },
        function (err) {
          console.log(err);
          return [false, err];
        }
      );
  }
  gapi.load("client", initiate);
};

export const getEvents = (calendarID, apiKey, updateEvents, updateCalendar) => {
  const initiate = () => {
    gapi.client
      .init({ apiKey: apiKey })
      .then(() => {
        return gapi.client.request({
          path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
        });
      })
      .then(
        ({ result }) => {
          updateCalendar(result);
          updateEvents(result.items);
        },
        (err) => [false, err]
      );
  };
  gapi.load("client", initiate);
};
