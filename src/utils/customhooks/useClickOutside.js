import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useClickOutside = (ref, active) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (active) {
        if (ref.current && !ref.current.contains(event.target)) {
          alert("You clicked outside of me!");
        }
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
