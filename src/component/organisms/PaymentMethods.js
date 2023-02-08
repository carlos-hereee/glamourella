import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import ShippingRequired from "../molecules/ShippingRequired";
import Total from "../molecules/Total";
import PaymentOptions from "../molecules/PaymentOptions";
import { AppContext } from "../../utils/context/AppContext";

const PaymentMethods = () => {
  const { cart } = useContext(ServicesContext);
  const { readyCheckout } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const [shippingRequired, setShippingReq] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      let cost = 0;
      cart.filter((c) => {
        if (c.isAccessory) {
          setShippingReq(true);
        }
        cost += c.cost * c.count;
        return c;
      });
      setTotal(cost);
    }
  }, [cart]);

  return (
    <div className="card-footer">
      <Total total={total} />
      <PaymentOptions />
      {shippingRequired && <ShippingRequired />}
    </div>
  );
};

export default PaymentMethods;
