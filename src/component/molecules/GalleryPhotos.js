import React, { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";
import ArtistName from "../atoms/ArtistName";
import ArtistPhoto from "../atoms/ArtistPhoto";

const GalleryPhotos = ({ data }) => {
  const { addToCart } = useContext(GalleryContext);
  return (
    <div key={data.uid} className="gallery-photo">
      <ArtistPhoto data={data} />
      {data.artistName && data.artistName.split("unsplash") && (
        <ArtistName name={data.artistName} />
      )}
      {data.cost && (
        <>
          <strong className="ribbon">${data.cost}</strong>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => addToCart(data)}>
            Add to cart
          </button>
        </>
      )}
    </div>
  );
};

export default GalleryPhotos;
