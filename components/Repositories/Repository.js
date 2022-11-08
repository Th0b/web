import styles from "./styles/Repository.module.sass"

export default function Repository({name, url, description}) {
    return(
        <div className={styles.repository}>
            <p>{name} - {description}</p>
            <a href={url}>Zde</a>
        </div>
    )
}