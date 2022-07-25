import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export type CardProps = {
    domain: string;
    path: string;
};

export const CardItem = (props: CardProps) => {
    const router = useRouter();

    return (
        <>
            <a href={props.domain + "/" + props.path} className={styles.card}>
                <h2>{process.env.PrimaryDomain} &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>
        </>
    );
};
