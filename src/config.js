import shortid from "shortid";

const lorem10 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, neque?";
const lorem20 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias reprehenderit. Voluptates fugit tenetur itaque minus sed, assumenda delectus accusantium!";
const lorem30 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt explicabo accusantium vel. Quos, illo. Velit est voluptatum at dignissimos, amet alias veritatis obcaecati assumenda, repellat aliquid non quae nam! Nobis.";

export const isDev = process.env.NODE_ENV === "development";
export const glamourella = {
  socials: [
    {
      isEmpty: true,
      name: "instagram",
      link: "https://www.instagram.com/glamourrella/",
      uid: shortid.generate(),
    },
  ],
  about: {
    uid: shortid.generate(),
    title: "Welcome to Glamourella",
    description: "",
    hero: {
      // isEmpty: false,
      isEmpty: true,
      link: "",
      alt: "main-hero",
    },
    sections: [
      {
        title: "Why choose Glamourella?",
        description: lorem10 + lorem30,
        uid: shortid.generate(),
        hero: {
          isEmpty: true,
          src: "",
          alt: "",
        },
        hyperlink: [
          {
            isEmpty: true,
            word: "",
            src: "",
          },
        ],
        lines: 5,
      },
      {
        title: "My Story",
        description: lorem30 + lorem30,

        uid: shortid.generate(),
        hero: {
          isEmpty: true,
          src: "",
          alt: "",
        },
        hyperlink: [
          {
            isEmpty: true,
            word: "",
            src: "",
          },
        ],
        lines: 4,
      },
      {
        title: "Who am I?",
        description: lorem20 + lorem20,
        uid: shortid.generate(),
        hero: {
          isEmpty: true,
          src: "",
          alt: "",
        },
        hyperlink: [
          {
            isEmpty: true,
            word: "",
            src: "",
          },
        ],
        lines: 3,
      },
    ],
  },
  services: [
    {
      uid: shortid.generate(),
      type: "pedicure",
      // src:
      //   process.env.REACT_APP_DB_URL +
      //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
      name: "classic ",
      length: "30 minutes",
      cost: 25,
      description:
        "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
    },
    {
      uid: shortid.generate(),
      type: "pedicure",
      // src:
      //   process.env.REACT_APP_DB_URL +
      //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
      name: "REFRESHER ",
      length: "45 minutes",
      cost: 35,
      description:
        "A combination of our Classic Pedicure with an exfoliation pink salt, deep massage with hot stones, warm towel wrap. Finish with a nail buff or polish.",
    },
    {
      uid: shortid.generate(),
      type: "manicure",
      // src:
      //   process.env.REACT_APP_DB_URL +
      //   "gallery/photo/?path=assets/manicure/rashid-khreiss-unsplash.jpg",
      name: "classic ",
      length: "20 minutes",
      cost: 15,
      description:
        "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
    },
    {
      uid: shortid.generate(),
      type: "manicure",
      // src:
      //   process.env.REACT_APP_DB_URL +
      //   "gallery/photo/?path=assets/manicure/bryony-elena-unsplash.jpg",
      name: "refresher ",
      length: "30 minutes",
      cost: 25,
      description:
        "A combination of Classic Manicure, your hand will be soaked in moisturized lotion gloves and rubbed with an exfoliation pink salt. Follow by a deep massage with hot stones, warm towel wrap and finish with a nail buff or polish.",
    },
    {
      uid: shortid.generate(),
      type: "manicure",
      // src:
      //   process.env.REACT_APP_DB_URL +
      //   "gallery/photo/?path=assets/manicure/kris-atomic-unsplash.jpg",
      name: "paris signature ",
      length: "56 minutes",
      cost: 29,
      description:
        "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
    },
  ],
  schedule: [
    { day: "Monday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Tuesday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Wednesday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Thursday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Friday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Saturday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    { day: "Sunday", hours: "9:30am - 6:30pm", key: shortid.generate() },
  ],
  menu: [
    { name: "home", uid: shortid.generate() },
    { name: "about", uid: shortid.generate() },
    { name: "services", uid: shortid.generate() },
    { name: "booking", uid: shortid.generate() },
    { name: "gallery", uid: shortid.generate() },
    { name: "checkout", uid: shortid.generate() },
    { name: "dashboard", uid: shortid.generate() },
  ],
};
