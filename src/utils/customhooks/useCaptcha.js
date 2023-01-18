import { useState, useEffect } from "react";

export const useCaptcha = () => {
  const [isHuman, setIsHuman] = useState("");
  const [isRequired, setIsRequired] = useState(true);
  useEffect(() => {
    if (isHuman) {
      setIsRequired(false);
    }
  }, [isHuman, isRequired]);
  return [isHuman, isRequired, setIsHuman, setIsRequired];
};
