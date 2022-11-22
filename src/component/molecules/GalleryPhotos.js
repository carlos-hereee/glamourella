import React from "react";
import ArtistName from "../atoms/ArtistName";
import ArtistPhoto from "../atoms/ArtistPhoto";

const GalleryPhotos = ({ data }) => {
  return (
    <div key={data.uid} className="gallery-photo">
      <ArtistPhoto data={data} />
      {data.artistName && data.artistName.split("unsplash") && (
        <ArtistName name={data.artistName} />
      )}
      <button type="button" className="btn-secondary">
        Add to cart
      </button>
    </div>
  );
};

export default GalleryPhotos;
