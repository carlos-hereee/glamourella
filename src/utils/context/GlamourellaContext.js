import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import shortid from "shortid";
import { axiosWithOutAuth } from "../axios";
import { reducer } from "./glamaurellaReducer";
export const GlamourellaContext = createContext();

const loadlocal = () => {
  let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde
      iste tempore iure! Debitis magnam, voluptate autem iusto error fuga odio
      soluta doloremque. Dolorum, voluptates! A culpa neque non dolores! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla voluptatem
      numquam, eum tempore sit quod ut nesciunt. Iste deleniti officia
      blanditiis! Commodi doloremque explicabo illo earum dolorum magni nisi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos quas
      hic, facilis quaerat quos velit alias doloribus nisi tempora?`;
  const socials = [
    {
      social: "instagram",
      link: "https://www.instagram.com/glamourrella/",
      key: shortid.generate(),
    },
  ];
  const about = [
    {
      title: "Why choose Glamourella?",
      description: lorem,
      uid: shortid.generate(),
      lines: 5,
    },
    {
      title: "My Story",
      description: lorem,
      uid: shortid.generate(),
      lines: 4,
    },
    {
      title: "Who am I?",
      description: lorem,
      uid: shortid.generate(),
      lines: 3,
    },
  ];
  const services = [
    {
      uid: shortid.generate(),
      type: "pedicure",
      name: "classic ",
      length: "30 minutes",
      cost: 25,
      description:
        "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
    },
    {
      uid: shortid.generate(),
      type: "pedicure",
      name: "REFRESHER ",
      length: "45 minutes",
      cost: 35,
      description:
        "A combination of our Classic Pedicure with an exfoliation pink salt, deep massage with hot stones, warm towel wrap. Finish with a nail buff or polish.",
    },
    {
      uid: shortid.generate(),
      type: "manicure",
      name: "classic ",
      length: "20 minutes",
      cost: 15,
      description:
        "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
    },
    {
      uid: shortid.generate(),
      type: "manicure",
      name: "refresher ",
      length: "30 minutes",
      cost: 25,
      description:
        "A combination of Classic Manicure, your hand will be soaked in moisturized lotion gloves and rubbed with an exfoliation pink salt. Follow by a deep massage with hot stones, warm towel wrap and finish with a nail buff or polish.",
    },
    {
      uid: shortid.generate(),
      type: "manicure",
      name: "paris signature ",
      length: "56 minutes",
      cost: 29,
      description:
        "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
    },
  ];
  return { socials, about, services };
};
export const GlamourellaState = ({ children }) => {
  const initialState = {
    isLoading: false,
    glamourella: [],
    socials: [],
    about: [],
    services: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAssets();
  }, []);
  const getAssets = async () => {
    try {
      const { data } = await axiosWithOutAuth.get("/glamourella");
      dispatch({ type: "LOAD_CONTENT", payload: data });
    } catch (error) {
      const data = loadlocal();
      // dispatch({ type: "LOAD_CONTENT", payload: data });
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: error.response.message });
    }
  };
  return (
    <GlamourellaContext.Provider
      value={{
        glamourella: state.glamourella,
        isLoading: state.isLoading,
        socials: state.socials,
        about: state.about,
        services: state.services,
      }}>
      {children}
    </GlamourellaContext.Provider>
  );
};
