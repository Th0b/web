//Hooks
import { useEffect, useState } from "react";
//Utils
import { dataFetch } from "utils/dataFetch";
//Styles
import "photoswipe/dist/photoswipe.css";
import styles from "./styles/Photos.module.sass";
// Components
import { Gallery } from "react-photoswipe-gallery";
import Photo from "./components/Photo.js";
import FetchProcess from "components/FetchProcess/FetchProcess.js";

export default function Photos({ quantity }) {
  const [photos, setPhotos] = useState();
  const [status, setStatus] = useState("");
  const url = "/api/proxy?apiTarget=piwigo";

  useEffect(() => {
    dataFetch(setStatus, setPhotos, url);
  }, []);

  return (
    <>
      <FetchProcess status={status} />
      {status === "success" && photos !== undefined && (
        <Gallery>
          <div className={styles.wrapper}>
            {photos.result.images.slice(0, quantity).map((image, index) => (
              <Photo image={image} key={index} />
            ))}
          </div>
        </Gallery>
      )}
    </>
  );
}
