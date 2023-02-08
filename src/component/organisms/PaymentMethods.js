import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import ShippingRequired from "../molecules/ShippingRequired";
import Total from "../molecules/Total";
import PaymentOptions from "../molecules/PaymentOptions";
import { AppContext } from "../../utils/context/AppContext";

const PaymentMethods = () => {
  const { cart } = useContext(ServicesContext);
  const { readyCheckout } = useContext(AppContext);

  return (
    <div className="card-footer">
      <PaymentOptions />
    </div>
  );
};

export default PaymentMethods;
