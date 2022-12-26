import { useContext } from "react";
import * as yup from "yup";
import Forms from "../organisms/Forms";
// import { CalendarContext } from "../../utils/context/CalendarContext";
// import FollowUs from "./FollowUs";
import { AppContext } from "../../utils/context/AppContext";

const schema = yup.object().shape({
  email: yup.string().email().required("*Required field"),
});
const values = { email: "" };
const Newsletter = () => {
  const { newsletter } = useContext(AppContext);
  // const { socials } = useContext(AppContext);
  // const socials = ;
  return (
    <section className="card">
      <h3>Join the newsletter</h3>
      <p>Subscribe to get the latest content by email</p>
      <Forms data={{ values, schema, onSubmit: newsletter }} />
      <p>Unsubscribe at any time.</p>
      {/* <FollowUs socials={socials} /> */}
    </section>
  );
};

export default Newsletter;
