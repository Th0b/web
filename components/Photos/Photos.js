import { useEffect, useState } from "react";
import Photo from "./Photo.js";
import DataFetchProcess from "components/DataFetchProcess/DataFetchProcess.js";
import { dataFetch } from "hooks/dataFetch";
import styles from "./styles/Photos.module.sass";

export default function Photos() {
  const [photos, setPhotos] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const url =
    "https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=IGQVJWMklCQ09reFF6RVlHb1lDZAHpsNloyalJadUl4N1MwLU9scUVkanNOLTBVRmlpVkVBaWhJcUhZAZAV9KSFBpY2ptQ1hpQTQ2OE5TYkd0VnA4WDRqaHNuSVdvS2FZAOXFhSmZAOeTh3d0IzTC1Gd1ZANVwZDZD";

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
