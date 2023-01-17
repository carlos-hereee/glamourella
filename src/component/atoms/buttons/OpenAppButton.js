import { setEarliestApp } from "../../../utils/functions/moment";

const OpenAppButton = () => (
  <button type="button" className="btn btn-classic" onClick={() => setEarliestApp()}>
    Find Open Appointment
  </button>
);
export default OpenAppButton;
