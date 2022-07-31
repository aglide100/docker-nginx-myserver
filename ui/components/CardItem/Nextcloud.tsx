import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

export const Nextcloud = (domain: String) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    let url = '';

    for (var p in domain) {
        if (Object.prototype.hasOwnProperty.call(domain, p)) {
            url += domain[p];
        }
    }

    return (
        <motion.div
            layout
            onMouseEnter={(ev) => {
                ev.preventDefault();
                setIsHover(true);
            }}
            onMouseLeave={(ev) => {
                ev.preventDefault();
                setIsHover(false);
            }}
            whileHover={{
                minWidth: "15rem",
                width: "22rem",
                height: "15rem",
                minHeight: "6rem"
            }}
            transition={{ duration: 0.7 }}
            style={{display:"flex"
            , flexDirection:"column"
            , width: "15rem"
            , height: "6rem"
            }}
            className={styles.card}
        >
            <a href={"nextcloud."+url} >
                <h2>Nextcloud </h2> 
            </a>
            {isHover && <motion.div style={{ width: "100%"}}>
                        <p>Some descrbe about this service</p>
                    </motion.div>}
        </motion.div>
    )
}
