//Hooks
import React, { useEffect, useState } from "react";
//Utils
import { dataFetch } from "utils/dataFetch";
import FetchProcess from "components/FetchProcess/FetchProcess.js";
import { Gallery, Item } from "react-photoswipe-gallery";
//Constants
import Constants from "/constants";
//Styles
import "photoswipe/dist/photoswipe.css";
import styles from "./styles/Photos.module.sass";

export default function Photos({ quantity }) {
  const [photos, setPhotos] = useState();
  const [status, setStatus] = useState("");
  const baseUrl = Constants.PIWIGO_API;

  useEffect(() => {
    dataFetch(setStatus, setPhotos, baseUrl);
  }, []);

  return (
    <>
      <FetchProcess status={status} />
      {status === "success" && photos !== undefined && (
        <Gallery>
          <div className={styles.wrapper}>
            {photos.result.images.map((image, index) => (
              <Photo image={image} key={index} />
            ))}
          </div>
        </Gallery>
      )}
    </>
  );
}

function Photo({ image }) {
  const style = {
    gridColumnEnd: `span ${getSpanEstimate(image.width)}`,
    gridRowEnd: `span ${getSpanEstimate(image.height)}`,
  };

  return (
    <>
      <Item
        original={image.element_url}
        thumbnail={image.derivatives.small.url}
        width={image.width}
        height={image.height}
      >
        {({ ref, open }) => (
          <img
            className={styles.photo}
            style={style}
            ref={ref}
            onClick={open}
            src={image.derivatives.small.url}
          />
        )}
      </Item>
    </>
  );
}

function getSpanEstimate(size) {
  if (size > 3000) {
    return 2;
  }

  return 1;
}
