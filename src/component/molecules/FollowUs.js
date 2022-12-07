import React from "react";
import { useContext } from "react";
import { GlamourellaContext } from "../../utils/context/GlamourellaContext";
import Icons from "../atoms/Icons";

const FollowUs = () => {
  const { socials } = useContext(GlamourellaContext);
  return (
    <div className="socials">
      <h4>Dont Miss a thing! Follow Us!</h4>
      {socials.map((s) => (
        <a href={s.link} key={s.uid} className={`social-link ${s.social}`}>
          <Icons name={s.social} size="2x" />
        </a>
      ))}
    </div>
  );
};

export default FollowUs;
