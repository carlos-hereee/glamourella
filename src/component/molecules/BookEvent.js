import Forms from "../organisms/Forms";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
});
const values = { name: "", email: "" };
const BookEvent = ({ data, app, onSubmit }) => {
  return (
    <>
      <h3>
        <strong>
          {data.title} {data.subtitle}
        </strong>
      </h3>
      <p>
        Appointment set for{" "}
        <strong>
          {app.date} @ {app.time.startTime} -{app.time.endTime}
        </strong>
      </p>
      <p>Please fill out information bellow</p>
      <Forms data={{ values, schema, onSubmit }} />
    </>
  );
};
export default BookEvent;
