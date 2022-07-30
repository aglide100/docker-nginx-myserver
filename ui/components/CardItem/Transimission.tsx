import styles from "../../styles/Home.module.css";


export  const Transimission = (domain: string) => {
    return (
        <a href="/transmission" className={styles.card}>
            <h2>Transimission &rarr;</h2>
            <p>
                Find in-depth information about Next.js features and
                API.
            </p>
        </a>
    )
}
