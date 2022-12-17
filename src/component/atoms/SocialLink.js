import Icons from "./Icons";

const SocialLink = ({ data }) => {
  const { name, isEmpty } = data;

  return (
    <a className="social-link" href={isEmpty ? "/#" : name} data-state={name}>
      <Icons name={name} size="2x" />
    </a>
  );
};

export default SocialLink;
