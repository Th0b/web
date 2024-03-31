// Components
import { Item } from "react-photoswipe-gallery";
// Styles
import styles from "../styles/Photo.module.sass";

export default function Photo({ image }) {
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
            ref={ref}
            onClick={open}
            src={image.derivatives.small.url}
          />
        )}
      </Item>
    </>
  );
}
