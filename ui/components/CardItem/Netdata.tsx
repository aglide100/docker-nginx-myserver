import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contentVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 0.7
      }
    },
    hidden: {
      maxWidth: "750px",
      maxHeight: "900px",
      opacity: 0,
      transition: {
        duration: 0.7
      }
    }
};

export const Netdata = (domain: String) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    
    return (
        <AnimatePresence>
            <motion.div
                layout
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                initial={true}
                onMouseEnter={(ev) => {
                    ev.preventDefault();
                    setIsHover(true);
                }}
                onMouseLeave={(ev) => {
                    ev.preventDefault();
                    setIsHover(false);
                }}
                whileHover={{
                    width: "20rem",
                    height: "10rem",
                    borderColor: "#0070f3",
                    color: "#0070f3",
                }}
                transition={{ duration: 0.7 }}
                style={{
                    display:"flex",
                    flexDirection:"column", 
                    width: "15rem", 
                    height: "6rem",
                    color: "inherit",
                    border: "1px solid #eaeaea",
                    borderRadius: "10px",
                    margin: "1.5rem",
                }}
            >   
                <motion.div 
                    onClick={(ev) => {
                        ev.preventDefault();
                        location.href="/netdata";
                    }}
                    style={{display: "flex", flexDirection: "row", marginLeft: "0.7rem", cursor: "pointer", alignItems: "center", justifyContent: "start"}}>
                    <motion.img src="/icon_monitoring.svg" style={{ width: "30px", height: "30px"}}></motion.img>         
                    <motion.h2 style={{marginLeft: "0.5rem"}}>Netdata</motion.h2> 
                </motion.div>
                {isHover && 
                    <motion.div
                        variants={contentVariants}
                        initial="show"
                        exit="hidden"
                        style={{marginLeft: "1.5rem"}}
                        >
                        Some describe about this service
                    </motion.div>
                }
            </motion.div>
        </AnimatePresence>
    )
}
