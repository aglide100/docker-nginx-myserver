import styles from "../../styles/Home.module.css";


export  const Photoprism = (domain: string) => {
    return (
        <a href="/photoprism" className={styles.card}>
            <h2>Photoprism &rarr;</h2>
            <p>
                Find in-depth information about Next.js features and
                API.
            </p>
        </a>
    )
}
