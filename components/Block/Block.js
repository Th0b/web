//Components
import Link from "next/link";
//Styles
import styles from "./Block.module.sass";

export default function Block({name, url, children}) {
    return (
        <div className={styles.blockWrapper}>
            {name !== undefined && url === undefined && <span className={styles.blockName}>{name}</span>}
            {name !== undefined && url !== undefined &&<span className={styles.blockName}><Link href={url}>{name}</Link></span>}
            <>{children}</>
        </div>
    )
}
