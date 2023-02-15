//Hooks
import { useEffect, useState } from "react";
//Utils
import { dataFetch } from "utils/dataFetch";
//Components
import Photo from "./components/Photo.js";
import FetchProcess from "components/FetchProcess/FetchProcess.js";
//Constants
import Constants from "constants";
//Styles
import styles from "./styles/Photos.module.sass";

export default function Photos({ quantity }) {
  const [photos, setPhotos] = useState();
  const [status, setStatus] = useState("");
  const url = Constants.INSTAGRAM_API + process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

  useEffect(() => {
    dataFetch(setStatus, setPhotos, url, "data");
  }, []);

  return (
    <>
      <FetchProcess status={status} />
      {status === "success" && photos !== undefined && (
        <div className={styles.photos}>
          {photos.slice(0, quantity).map((photo) => (
            <Photo
              key={photo.id}
              url={photo.media_url}
              caption={photo.caption}
            />
          ))}
        </div>
      )}
    </>
  );
}
