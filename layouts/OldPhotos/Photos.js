//Hooks
import { useEffect, useState } from "react";
//Utils
import { dataFetch } from "utils/dataFetch";
//Components
import Photo from "./components/Photo.js";
import FetchProcess from "components/FetchProcess/FetchProcess.js";
//Constants
import Constants from "/constants";
//Styles
import styles from "./styles/Photos.module.sass";

//Photoswipe
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Photos({ quantity }) {
  const [photos, setPhotos] = useState();
  const [status, setStatus] = useState("");
  const baseUrl =
    Constants.BASE_INSTAGRAM_API + process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
  const thumbnailUrl =
    Constants.THUMBNAIL_INSTAGRAM_API +
    "www.instagram.com/p/fA9uwTtkSN/&access_token=" +
    process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

  useEffect(() => {
    dataFetch(setStatus, setPhotos, baseUrl, "data");
    console.log(photos);
  }, []);

  return (
    <>
      <FetchProcess status={status} />
      {status === "success" && photos !== undefined && (
        <>
          {/*<Gallery>
            {photos.slice(0, quantity).map((photo) => (
              <Item
                className={styles.photo}
                key={photo.id}
                original={photo.media_url}
                caption={photo.caption}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={photo.media_url} />
                )}
              </Item>
            ))}
                </Gallery>*/}
          <div className={styles.photos}>
            {photos.slice(0, quantity).map((photo) => (
              <Photo
                key={photo.id}
                url={photo.media_url}
                caption={photo.caption}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
