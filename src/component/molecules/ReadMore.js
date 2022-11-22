const ReadMore = ({ data }) => {
  return (
    <>
      <p className="read-more">{data}</p>
      <input type="checkbox" className="read-more-toggle" />
    </>
  );
};

export default ReadMore;
