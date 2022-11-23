const Photo = ({ data }) => {
  return (
    <img
      src={data.src}
      alt={data.fileName}
      className="photo-accessory"
      crossOrigin="anonymous"
    />
  );
};

export default Photo;
