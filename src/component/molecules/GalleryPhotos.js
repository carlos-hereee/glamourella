import React, { useContext } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import ArtistName from "../atoms/ArtistName";
import ArtistPhoto from "../atoms/ArtistPhoto";

const GalleryPhotos = ({ data }) => {
  const { addToCart } = useContext(ServicesContext);
  return (
    <div key={data.uid} className="gallery-photo">
      <ArtistPhoto data={data} />
      {data.artistName && data.artistName.split("unsplash") && (
        <ArtistName name={data.artistName} />
      )}
      <button
        type="button"
        className="btn-secondary"
        onClick={() => addToCart(data)}>
        Add to cart
      </button>
    </div>
  );
};

export default GalleryPhotos;
