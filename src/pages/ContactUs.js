import { useContext } from "react";
import * as yup from "yup";
import Forms from "../component/forms/Forms";
import { CalendarContext } from "../utils/CalendarContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  subject: yup.string().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const ContactUs = () => {
  const { contactUs } = useContext(CalendarContext);

  return (
    <main className="container">
      <Forms
        data={{
          initialValues: { name: "", email: "", message: "" },
          schema,
          handleSubmit: contactUs,
        }}
      />
    </main>
  );
};

export default ContactUs;
