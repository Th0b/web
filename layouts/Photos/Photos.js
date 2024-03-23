//Hooks
import React, { useEffect, useState } from "react";
//Utils
import { dataFetch } from "utils/dataFetch";
import FetchProcess from "components/FetchProcess/FetchProcess.js";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
//Constants
import Constants from "/constants";
//Styles

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
          {photos.result.images.map((image, index) => (
            <>
              <Item
                original={image.element_url}
                thumbnail={image.derivatives.thumb.url}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={image.derivatives.thumb.url}
                  />
                )}
              </Item>
            </>
          ))}
        </Gallery>
      )}
    </>
  );
}
