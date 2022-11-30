import { Link } from "react-router-dom";

const CustomLink = ({ data }) => {
  return (
    <Link to={`/${data.link}`} className="custom-btn-link">
      {data.content}
    </Link>
  );
};

export default CustomLink;
