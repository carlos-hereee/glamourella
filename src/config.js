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
    subtitle: "",
    hero: {
      // isEmpty: false,
      isEmpty: true,
      link: "",
      alt: "main-hero",
    },
    sections: [
      {
        title: "Why choose Glamourella?",
        response: lorem10 + lorem30,
        uid: shortid.generate(),
        hero: { isEmpty: true, link: "/lorem", alt: "lorem ipsum" },
        hyperlink: [{ isEmpty: true, word: "Maiores", link: "/lorem" }],
      },
      {
        title: "My Story",
        response: lorem30 + lorem30,
        uid: shortid.generate(),
        hero: {
          isEmpty: true,
          link: "",
          alt: "",
        },
        hyperlink: [
          {
            isEmpty: true,
            word: "Distinctio, molestias reprehenderit.",
            link: "/lorem",
          },
        ],
      },
      {
        title: "Who am I?",
        response: lorem20 + lorem20,
        uid: shortid.generate(),
        hero: {
          isEmpty: true,
          link: "",
          alt: "",
        },
        hyperlink: [
          {
            isEmpty: true,
            word: "amet alias veritatis obcaecati assumenda",
            link: "/lorem",
          },
        ],
      },
    ],
  },
  services: {
    uid: shortid.generate(),
    title: "Featured Services",
    subtitle: "",
    hero: {
      // isEmpty: false,
      isEmpty: false,
      isIcon: false,
      link: "",
      alt: "main-hero",
    },
    sections: [
      {
        uid: shortid.generate(),
        type: "pedicure",
        hero: { isEmpty: true, link: "/lorem", alt: "lorem ipsum" },
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
        title: "classic",
        length: "30 minutes",
        cost: 25,
        description:
          "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        hero: { isEmpty: true, link: "/lorem", alt: "lorem ipsum" },

        type: "pedicure",
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
        title: "REFRESHER ",
        length: "45 minutes",
        cost: 35,
        description:
          "A combination of our Classic Pedicure with an exfoliation pink salt, deep massage with hot stones, warm towel wrap. Finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        hero: { isEmpty: true, link: "/lorem", alt: "lorem ipsum" },

        type: "manicure",
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/manicure/rashid-khreiss-unsplash.jpg",
        title: "classic",
        length: "20 minutes",
        cost: 15,
        description:
          "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        hero: { isEmpty: true, link: "/lorem", alt: "lorem ipsum" },

        type: "manicure",
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/manicure/bryony-elena-unsplash.jpg",
        title: "refresher ",
        length: "30 minutes",
        cost: 25,
        description:
          "A combination of Classic Manicure, your hand will be soaked in moisturized lotion gloves and rubbed with an exfoliation pink salt. Follow by a deep massage with hot stones, warm towel wrap and finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        type: "manicure",
        hero: { isEmpty: true, link: "/lorem", alt: "lorem ipsum" },

        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/manicure/kris-atomic-unsplash.jpg",
        name: "paris signature ",
        length: "56 minutes",
        cost: 29,
        description:
          "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
      },
    ],
  },
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
  gallery: {
    uid: shortid.generate(),
    title: "Check out my collection",
    subtitle: "",
    hero: {
      // isEmpty: false,
      isEmpty: true,
      isIcon: false,
      link: "",
      alt: "main-hero",
    },
    sections: [
      {
        hero: {
          // isEmpty: false,
          isIcon: false,
          isEmpty: true,
          link: "",
          alt: "main-hero",
        },
        artistName: "gustavo spindula unsplash",
        cost: 24,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        file: "gustavo-spindula-unsplash.jpg",
        path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        src: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
        type: "braids",
        uid: "39c68aab-4071-4b05-a8b3-a224b8fbba69",
      },
      {
        hero: {
          // isEmpty: false,
          isIcon: false,
          isEmpty: true,
          link: "",
          alt: "main-hero",
        },
        artistName: "gustavo spindula unsplash",
        cost: 24,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        file: "gustavo-spindula-unsplash.jpg",
        path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        src: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
        type: "braids",
        uid: "39c68aab-4a8b3-a224b8fbba69",
      },
      {
        hero: {
          // isEmpty: false,
          isIcon: false,
          isEmpty: true,
          link: "",
          alt: "main-hero",
        },
        artistName: "gustavo spindula unsplash",
        cost: 24,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        file: "gustavo-spindula-unsplash.jpg",
        path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        src: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
        type: "braids",
        uid: "39c68aab-4071-4b05--a224b8fbba69",
      },
      {
        hero: {
          // isEmpty: false,
          isIcon: false,
          isEmpty: true,
          link: "",
          alt: "main-hero",
        },
        artistName: "gustavo spindula unsplash",
        cost: 24,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        file: "gustavo-spindula-unsplash.jpg",
        path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        src: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
        type: "braids",
        uid: "39c68aab--4b05-a8b3-a224b8fbba69",
      },
      {
        hero: {
          // isEmpty: false,
          isIcon: false,
          isEmpty: true,
          link: "",
          alt: "main-hero",
        },
        artistName: "gustavo spindula unsplash",
        cost: 24,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        file: "gustavo-spindula-unsplash.jpg",
        path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        src: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
        type: "braids",
        uid: "39c68aab-4071-4b05-a8b3-",
      },
      {
        hero: {
          // isEmpty: false,
          isIcon: false,
          isEmpty: true,
          link: "",
          alt: "main-hero",
        },
        artistName: "gustavo spindula unsplash",
        cost: 24,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        file: "gustavo-spindula-unsplash.jpg",
        path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        src: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
        type: "braids",
        uid: "-4071-4b05-a8b3-a224b8fbba69",
      },
    ],
  },
};
