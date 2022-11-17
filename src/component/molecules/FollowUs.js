import React from "react";
import Icons from "../atoms/Icons";

const FollowUs = ({ socials }) => {
  return (
    <div>
      <h4>Dont Miss a thing! Follow Us!</h4>
      {socials.map((s) => (
        <a href={s.link} key={s.key} className={`social-link ${s.social}`}>
          <Icons name={s.social} size="2x" />
        </a>
      ))}
    </div>
  );
};

export default FollowUs;
