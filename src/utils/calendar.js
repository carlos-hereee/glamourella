import { gapi } from "gapi-script";

export const joinEvent = (calendarId, accessToken, event) => {
  function initiate() {
    gapi.client
      .request({
        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${event.id}`,
        method: "PUT",
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
        (err) => {
          console.log("err", err);
          return [false, err];
        }
      );
  }
  gapi.load("client", initiate);
};

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
