import Icons from "./Icons";

const SocialLink = ({ data }) => {
  const { name, isEmpty, link } = data;
  console.log("link", link);
  return (
    <a className="social-link" href={isEmpty ? "/#" : link} data-state={name}>
      <Icons name={name} size="2x" />
    </a>
  );
};

export default SocialLink;
