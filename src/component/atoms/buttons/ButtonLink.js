const ButtonLink = ({ link, click }) => {
  return (
    <button type="button" className="btn btn-classic" onClick={click}>
      Go to {link}
    </button>
  );
};

export default ButtonLink;
