import { useContext, useEffect, useState } from "react";
import CardRow from "../component/organisms/CardRow";
import { ServicesContext } from "../utils/context/ServicesContext";
import CustomLink from "../component/atoms/CustomLink";

const Checkout = () => {
  const { cart } = useContext(ServicesContext);
  const [total, setTotal] = useState(0);
  const checkoutLink = {
    content: "Add some accessories to your collection",
    link: "gallery",
  };
  useEffect(() => {
    if (cart) {
      let count = 0;
      cart && cart.forEach((c) => c.cost && (count += c.cost));
      setTotal(count);
    }
  }, [cart]);
  return (
    <section className="primary-container">
      <h3>Check Out</h3>
      {total < 0 && <p>Link to Services and Gallery</p>}
      {cart ? (
        cart.map((c) => <CardRow key={c.uid} data={c} />)
      ) : (
        <CustomLink data={checkoutLink} />
      )}
      {/* {checkout && checkout.map((c) => <CardRow key={c.uid} data={c} />)} */}
      <h4>Total ${total}</h4>
      {/* <button >Pay now</button> */}
    </section>
  );
};

export default Checkout;
