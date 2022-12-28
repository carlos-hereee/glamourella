import React, { createContext, useReducer } from "react";
import shortid from "shortid";
import { formatDate } from "../moment";
import { reducer } from "../reducers/AdminReducer";
export const AdminContext = createContext();

export const AdminState = ({ children }) => {
  const initialState = {
    isLoading: false,
    menu: [{ name: "schedule", uid: shortid.generate(), isActive: true }],
    isAdmin: true,
    active: { name: "schedule", uid: shortid.generate(), isActive: true },
    schedule: {
      title: "My Schedule",
      subtitle: "",
      isHeroEmpty: true,
      isNav: true,
      nav: ["all", "today", "booked"],
      isIcon: false,
      planner: [
        {
          day: formatDate(new Date()),
          uid: shortid.generate(),
          isToday: true,
          shift: [
            { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
            { uid: shortid.generate(), time: "11am -12pm", isOpen: true },
            { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
            { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
          ],
        },
        {
          day: formatDate(new Date().setDate(new Date().getDate() + 1)),
          uid: shortid.generate(),
          isToday: false,
          shift: [
            { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
            { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
            { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
            { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
          ],
        },
        {
          day: formatDate(new Date().setDate(new Date().getDate() + 2)),
          uid: shortid.generate(),
          isToday: false,
          shift: [
            { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
            { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
            { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
            { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
          ],
        },
        {
          day: formatDate(new Date().setDate(new Date().getDate() + 3)),
          uid: shortid.generate(),
          isToday: false,
          shift: [
            { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
            { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
            { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
            { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
          ],
        },
        {
          day: formatDate(new Date().setDate(new Date().getDate() + 4)),
          uid: shortid.generate(),
          isToday: false,
          shift: [
            { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
            { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
            { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
            { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
          ],
        },
        {
          day: formatDate(new Date().setDate(new Date().getDate() + 5)),
          uid: shortid.generate(),
          isToday: false,
          shift: [
            { uid: shortid.generate(), time: "9am - 10am", isOpen: true },
            { uid: shortid.generate(), time: "11am - 12pm", isOpen: true },
            { uid: shortid.generate(), time: "2pm - 3pm", isOpen: true },
            { uid: shortid.generate(), time: "4pm - 5pm", isOpen: true },
          ],
        },
      ],
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const setMenuActive = (menu, e) => {
    dispatch({ type: "IS_LOADING", payload: true });
    menu.filter((m) => {
      if (m.isActive) m.isActive = false;
      if (m.uid === e.uid) m.isActive = true;
      return m;
    });
    // console.log("menu", menu);
    dispatch({ type: "SET_MENU_ACTIVE", payload: e, menu: menu });
  };
  const filter = (content, option) => {
    dispatch({ type: "IS_LOADING", payload: true });
    if (option === "all") {
      return dispatch({ type: "LOAD_SERVICES", payload: content });
    }
    console.log("data", content);
    // const data = data.option((s) => s.type === option);
    // dispatch({ type: "UPDATE_SERVICES", payload: data });
  };
  return (
    <AdminContext.Provider
      value={{
        isLoading: state.isLoading,
        isAdmin: state.isAdmin,
        menu: state.menu,
        schedule: state.schedule,
        active: state.active,
        setMenuActive,
        filter,
      }}>
      {children}
    </AdminContext.Provider>
  );
};
