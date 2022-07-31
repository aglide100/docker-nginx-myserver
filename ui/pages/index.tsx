import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as axios from "axios";
import { CardContainer, CardContainerProps, CardContainerDataType } from "../components/CardContainer/CardContainer";
import { motion, AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
    let cardList;
    const [data, setData] = useState<any>();
    const [domain, setDomain] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function getEnv() {
        const axiosObj = axios.default;
        axiosObj.get("/env").then((res) => {
            setData(res.data.env);
            setDomain(res.data.Domain1);
            console.log("Domain :", domain)
            setIsLoading(true);
        });
    }

    useEffect(() => {
        if (!isLoading) {
            getEnv();
        }
    });
      
    if (isLoading && data != undefined) {
        cardList = Object.keys(data).map((key, i) => {
            let serviceName = key as CardContainerDataType
            
            if (data[key] == true) {
                return <CardContainer svcName={serviceName} domain={domain}></CardContainer>
            }
        })
    } else {
        cardList = <>Loading...</>
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Hello</title>
                <meta name="description" content="" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello
                </h1>

                {/* <p className={styles.description}>
                    <code className={styles.code}>pages/index.tsx</code>
                </p> */}

                <motion.div className={styles.grid}>
                    <AnimatePresence>
                        {cardList}
                    </AnimatePresence>
                </motion.div>
            </main>

            <footer className={styles.footer}>
                
            </footer>
        </div>
    );
};

export default Home;
