import { useContext, useEffect, useState } from "react";
import CheckoutCard from "../component/molecules/CheckoutCard";
import { GalleryContext } from "../utils/context/GalleryContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import CustomLink from "../component/atoms/CustomLink";

const Checkout = () => {
  const { cart } = useContext(ServicesContext);
  const { checkout } = useContext(GalleryContext);
  const [total, setTotal] = useState(0);
  const cartLink = {
    content: "Your cart is empty, check out our services",
    link: "services",
  };
  const checkoutLink = {
    content: "Add some accessories to your collection",
    link: "gallery",
  };
  useEffect(() => {
    if (cart || checkout) {
      let count = 0;
      cart && cart.forEach((c) => c.cost && (count += c.cost));
      checkout && checkout.forEach((co) => co.cost && (count += co.cost));
      setTotal(count);
    }
  }, [cart, checkout]);
  return (
    <main className="container">
      <div className="card-container">
        <h2>Check Out</h2>
        {total < 0 && <p>Link to Services and Gallery</p>}
        {cart && cart.length > 0 ? (
          cart.map((c) => <CheckoutCard key={c.uid} data={c} />)
        ) : (
          <CustomLink data={cartLink} />
        )}
        {checkout && checkout.length > 0 ? (
          checkout.map((c) => <CheckoutCard key={c.uid} data={c} />)
        ) : (
          <CustomLink data={checkoutLink} />
        )}
        <h4>Total ${total}</h4>
        {/* <button >Pay now</button> */}
      </div>
    </main>
  );
};

export default Checkout;
