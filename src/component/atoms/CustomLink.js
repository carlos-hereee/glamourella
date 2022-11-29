import { Link } from "react-router-dom";

const CustomLink = ({ data }) => {
  return (
    <>
      <p>{data.content}</p>
      <Link to={`/${data.link}`}>
        <button type="button">Go to services</button>
      </Link>
    </>
  );
};

export default CustomLink;
