import ButtonLink from "../../atoms/buttons/ButtonLink";
import OpenAppButton from "../../atoms/buttons/OpenAppButton";

const BookingLink = ({ data }) => {
  return (
    <div className="row">
      <ButtonLink link="booking" />
      <OpenAppButton service={data} />
    </div>
  );
};

export default BookingLink;
