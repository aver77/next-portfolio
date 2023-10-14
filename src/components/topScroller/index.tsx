"use client";

import React, { useEffect, useState } from "react";
import ArrowTopComponent from "@/shared/assets/svg/components/arrowTopComponent";

import { AnimatePresence, motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

import styles from "./styles.module.scss";
import cssVars from "@/shared/styles/vars.module.scss";

const TopScroller = () => {
    const [showScroller, setShowScroller] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const scrollTop = window.scrollY;
            const scrollHeight =
                document.documentElement.offsetHeight - document.documentElement.clientHeight;

            const scrollComparison = 1000;
            const calculatedBaseScrollComparison =
                scrollHeight > scrollComparison ? scrollComparison : scrollComparison / 2;

            if (!showScroller && scrollTop > calculatedBaseScrollComparison) {
                setShowScroller(true);
            } else if (showScroller && scrollTop < calculatedBaseScrollComparison) {
                setShowScroller(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, [showScroller]);

    const onClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {!showScroller ? null : (
                <motion.div {...smoothAppearing} className={styles.container} onClick={onClick}>
                    <ArrowTopComponent color={cssVars.light} height={"20px"} width={"20px"} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TopScroller;
