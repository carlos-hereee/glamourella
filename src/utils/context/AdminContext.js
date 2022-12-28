import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import shortid from "shortid";
import { admin } from "../../admin.config";
import { formatDate } from "../moment";
import { reducer } from "../reducers/AdminReducer";
export const AdminContext = createContext();

export const AdminState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isAdmin: true,
    isFiltered: false,
    active: { name: "schedule", uid: shortid.generate(), isActive: true },
    menu: admin.menu,
    schedule: admin.schedule,
    planner: {},
    booked: admin.booked,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "IS_LOADING", payload: true });
    let sorted = filterBooked(state.schedule.sections, true);
    // let s = filterSortedBooked(sorted);
    // console.log("sorted", s);
    dispatch({ type: "LOAD_BOOKED", payload: sorted });
  }, []);
  const setMenuActive = (menu, e) => {
    dispatch({ type: "IS_LOADING", payload: true });
    menu.filter((m) => {
      if (m.isActive) m.isActive = false;
      if (m.uid === e.uid) m.isActive = true;
      return m;
    });
    dispatch({ type: "SET_MENU_ACTIVE", payload: e, menu: menu });
  };
  const filterBooked = (content) => {
    return content.filter((c) => {
      let booked = c.list.filter((l) => l.isOpen === false);
      return booked.length > 0 && c;
    });
  };
  // const filterSortedBooked = (content) => {
  //   return content.filter((c) => {
  //     let booked = c.list.filter((l) => {

  //       l.isOpen === false

  //     });
  //     return booked.length > 0 && c;
  //   });
  // };
  const filter = (content, option) => {
    dispatch({ type: "IS_LOADING", payload: true });
    if (option === "all") {
      return dispatch({ type: "LOAD_PLANNER", payload: false });
    }
    if (option === "today") {
      let today = content.filter((c) => c.title === formatDate(new Date()));
      return dispatch({ type: "FILTER_PLANNER", payload: today });
    }
    if (option === "booked") {
      let sorted = filterBooked(content);
      return dispatch({ type: "FILTER_PLANNER", payload: sorted });
    }
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
        isFiltered: state.isFiltered,
        planner: state.planner,
        booked: state.booked,
        setMenuActive,
        filter,
      }}>
      {children}
    </AdminContext.Provider>
  );
};
