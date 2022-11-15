import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OauthCallback = () => {
  const nagivate = useNavigate();
  useEffect(() => {
    nagivate("/");
  }, []);
  return <div>OauthCallback</div>;
};

export default OauthCallback;
