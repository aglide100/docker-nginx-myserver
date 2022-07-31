import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

export const Transimission = (domain: String) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    
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
            <a href="/transimission" >
                <h2>Transimission </h2> 
            </a>
            {isHover && <motion.div style={{ width: "100%"}}>
                        <p>Some descrbe about this service</p>
            </motion.div>}
        </motion.div>
    )
}
