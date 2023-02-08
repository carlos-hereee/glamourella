import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { UserContext } from "../../utils/context/UserContext";
import { scrollToCartItem } from "../../utils/functions/calendar";
import Forms from "../organisms/Forms";
import Buttons from "./buttons/Buttons";
import CardHeader from "./card/CardHeader";
import UserCard from "./card/UserCard";

const PaymentOptions = ({ data }) => {
  const { selectPaymentType } = useContext(AppContext);
  const { cart } = useContext(ServicesContext);
  const { user, userValues, userSchema, shippingDetails } = useContext(UserContext);
  // todo add toggle active

  return <Buttons handleClick={() => selectPaymentType(data)} name={data.icon} />;
};

export default PaymentOptions;
