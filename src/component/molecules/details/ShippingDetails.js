const ShippingDetails = ({ data }) => {
  return (
    <div className="shipping-details">
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Street Address: {data.streetAddress}</p>
      <p>Apt/Suite: {data.apt}</p>
      <p>City: {data.city}</p>
      <p>State: {data.state}</p>
      <p>Postal Code: {data.postalCode}</p>
    </div>
  );
};
export default ShippingDetails;
