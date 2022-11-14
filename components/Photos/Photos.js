import { useEffect, useState } from "react";
import Photo from "./Photo.js";
import DataFetchProcess from "components/DataFetchProcess/DataFetchProcess.js";
import { dataFetch } from "hooks/dataFetch";
import styles from "./styles/Photos.module.sass";

export default function Photos() {
  const [photos, setPhotos] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_INSTAGRAM_API;

  useEffect(() => {
    dataFetch(setError, setLoading, setPhotos, url, "data");
  }, []);

  return (
    <>
      <DataFetchProcess error={error} loading={loading} />
      {!error && !loading && (
        <div className={styles.photos}>
          {photos &&
            photos.map((photo) => (
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
