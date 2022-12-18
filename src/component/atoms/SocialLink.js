import Icons from "./Icons";

const SocialLink = ({ data }) => {
  const { name, isEmpty, link } = data;

  return (
    <a
      className={`social-link ${name}`}
      href={isEmpty ? link : "/#"}
      data-state={name}>
      <Icons name={name} size="2x" />
    </a>
  );
};

export default SocialLink;
