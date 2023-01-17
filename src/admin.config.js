import shortid from "shortid";
import { formatDate } from "./utils/functions/moment";

export const admin = {
  menu: [
    { name: "schedule", uid: shortid.generate(), isActive: true },
    { name: "booked", uid: shortid.generate(), isActive: false },
    { name: "appointments", uid: shortid.generate(), isActive: false },
  ],
  schedule: {
    title: "My Schedule",
    subtitle: "",
    hasHero: false,
    isNav: false,
    // nav: ["all", "today", "booked"],
    hasIcon: false,
    sections: [
      {
        title: formatDate(new Date()),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: false,
        attendees: {},
        list: [
          {
            uid: shortid.generate(),
            hasHero: false,
            hasLink: false,
            hasList: false,
            time: {
              startTime: new Date(new Date().setHours(9)).setMinutes(0),
              endTime: new Date(new Date().setHours(10)).setMinutes(30),
            },
          },
        ],
      },
    ],
  },
  booked: {
    title: "Upcoming appointments",
    subtitle: "",
    hasHero: false,
    isNav: false,
    hasIcon: false,
    sections: [
      {
        title: formatDate(new Date()),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [{ uid: shortid.generate(), response: "9am - 10am", isOpen: false }],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 5)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [{ uid: shortid.generate(), response: "4pm - 5pm", isOpen: false }],
      },
    ],
  },
  meeting: {
    title: "Appointments",
    subtitle: "",
    hasHero: false,
    isNav: true,
    hasIcon: false,
    nav: ["all", "today", "booked"],
    sections: [
      {
        title: formatDate(new Date()),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: false },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 1)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 2)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 3)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 4)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 5)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: false },
        ],
      },
    ],
  },
};
