import { useEffect, useState } from "react";
import Photo from "./Photo.js";
import DataFetchProcces from "./DataFetchProcces.js";
import styles from "../../styles/Gallery/Photos.module.sass";

export default function Photos() {
  const [photos, setPhotos] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    try {
      const response = await fetch(
        "https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=IGQVJWMklCQ09reFF6RVlHb1lDZAHpsNloyalJadUl4N1MwLU9scUVkanNOLTBVRmlpVkVBaWhJcUhZAZAV9KSFBpY2ptQ1hpQTQ2OE5TYkd0VnA4WDRqaHNuSVdvS2FZAOXFhSmZAOeTh3d0IzTC1Gd1ZANVwZDZD"
      );
      const result = await response.json();
      setPhotos(result.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DataFetchProcces error={error} loading={loading} />
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
