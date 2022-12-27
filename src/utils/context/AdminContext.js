import React, { createContext, useReducer } from "react";
import shortid from "shortid";
import { formatDate } from "../moment";
import { reducer } from "../reducers/AdminReducer";
export const AdminContext = createContext();

export const AdminState = ({ children }) => {
  const initialState = {
    isLoading: false,
    menu: [{ name: "Schedule", uid: shortid.generate() }],
    isAdmin: true,
    schedule: [
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
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AdminContext.Provider
      value={{
        isLoading: state.isLoading,
        isAdmin: state.isAdmin,
        menu: state.menu,
        schedule: state.schedule,
      }}>
      {children}
    </AdminContext.Provider>
  );
};
