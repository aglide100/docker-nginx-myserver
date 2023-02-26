import React, { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contentVariants = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.7,
    },
  },
  hidden: {
    maxWidth: "750px",
    maxHeight: "900px",
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

type CardItemTemplateProps = {
  // domain: String;
  isClick: boolean;
  displayedName: String;
  // base url, example.com
  svcUrl: String;
  logoUrl: String;
  child: JSX.Element;
};

export const CardItemTemplate = (props: CardItemTemplateProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <AnimatePresence>
      {!props.isClick ? (
        <>
          <motion.div
            layout
            style={{
              display: "flex",
              flexDirection: "column",
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
                location.href = props.svcUrl.toString();
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "0.7rem",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <motion.img
                src={props.logoUrl.toString()}
                style={{ width: "30px", height: "30px" }}
              ></motion.img>
              <motion.h2 style={{ marginLeft: "0.5rem" }}>
                {props.displayedName}
              </motion.h2>
            </motion.div>
          </motion.div>
        </>
      ) : (
        <>
          {isHover && <></>}
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
              display: "fixed",
              width: "22rem",
              height: "10rem",
              borderColor: "#0070f3",
              backgroundColor: "#000000",
              color: "#0070f3",
            }}
            transition={{ duration: 1 }}
            style={{
              display: "flex",
              flexDirection: "column",
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
                location.href = props.svcUrl.toString();
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "0.7rem",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <motion.img
                src={props.logoUrl.toString()}
                style={{ width: "30px", height: "30px" }}
              ></motion.img>
              <motion.h2 style={{ marginLeft: "0.5rem" }}>
                {props.displayedName}
              </motion.h2>
            </motion.div>
            {isHover && props.isClick && (
              <motion.div
                variants={contentVariants}
                initial="show"
                exit="hidden"
                transition={{ duration: 0.7 }}
                style={{ marginLeft: "1.5rem" }}
              >
                {props.child}
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
