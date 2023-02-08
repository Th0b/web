//Hooks
import { useEffect, useState } from "react";
//Utils
import { dataFetch } from "utils/dataFetch";
//Components
import Photo from "./components/Photo.js";
import DataFetchLoading from "components/DataFetchLoading/DataFetchLoading.js";
//Constants
import * as Constants from "constants";
//Styles
import styles from "./styles/Photos.module.sass";

export default function Photos({ quantity }) {
  const [photos, setPhotos] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = Constants.INSTAGRAM_API + process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

  useEffect(() => {
    dataFetch(setError, setLoading, setPhotos, url, "data");
  }, []);

  return (
    <>
      <DataFetchLoading error={error} loading={loading} />
      {!error && !loading && photos !== undefined && (
        <div className={styles.photos}>
          {photos.slice(0, quantity).map((photo) => (
            <>
              <Photo
                url={photo.media_url}
                id={photo.id}
                caption={photo.caption}
              />
            </>
          ))}
        </div>
      )}
    </>
  );
}
