import React, { useContext } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import ArtistName from "../atoms/ArtistName";
import ArtistPhoto from "../atoms/ArtistPhoto";
import CardSection from "../organisms/CardSection";
import CardHeader from "./card/CardHeader";
import CardSectionHeader from "./card/CardSectionHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const GalleryPhotos = ({ data, click }) => {
  console.log("data", data);
  return (
    <div className="card">
      <CardHeader data={data} />
      <CardBody data={data} />
      <CardFooter data={data} />
      {/* {data.cost && (
        <>
          <strong className="ribbon">${data.cost}</strong>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => click(data)}>
            Add to cart
          </button>
        </>
      )} */}
    </div>
  );
};

export default GalleryPhotos;
