"use client";

import { FC, lazy, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { INodesData } from "../defaultData";
import Title, { titleTypes } from "@/shared/ui/title";
import Button, { buttonVariants } from "@/shared/ui/button";
import Line from "@/shared/ui/line";
import cx from "classnames";

import { AnimatePresence } from "framer-motion";

import gitImg from "@/shared/assets/svg/git.svg";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const Modal = lazy(() => import("./modal"));

type TSharedNode = Omit<INodesData, "coordinates">;
const SharedNode: FC<TSharedNode> = ({
    name,
    imgSrc,
    extendedDesc,
    extendedStack,
    desc,
    link,
    stack
}) => {
    const t = useTranslations("projects");
    const [modalVisible, setModalVisible] = useState(false);

    const [nodeDesc, setNodeDesc] = useState(desc);
    const descRef = useRef<HTMLParagraphElement | null>(null);

    useLayoutEffect(() => {
        const currentRef = descRef.current;
        if (currentRef) {
            const dotsSymbol = "...";

            const { clientHeight, scrollHeight } = currentRef;

            if (clientHeight < scrollHeight) {
                const difference = scrollHeight - clientHeight;
                const separator = " ";

                setNodeDesc(
                    desc
                        .split(separator)
                        .splice(0, difference > 20 ? 8 : 14)
                        .join(separator) + dotsSymbol
                );
            } else {
                if (desc.includes(dotsSymbol)) {
                    setNodeDesc(desc.replaceAll(dotsSymbol, ""));
                }
            }
        }
    }, [desc]);

    const openModal = () => setModalVisible(true);

    return (
        <div className={styles.container}>
            <Image className={styles.projImg} src={imgSrc} alt={"project img"} />
            <div>
                <Title
                    className={cx(styles.text, styles.title)}
                    text={name}
                    titleType={titleTypes.h4}
                />
            </div>
            <Line thickness={"2px"} />
            <p className={cx(styles.text, styles.stack)}>{stack}</p>
            <p ref={descRef} className={styles.desc}>
                {nodeDesc}
            </p>
            <Line thickness={"2px"} />
            <div className={styles.btnsSection}>
                <Button onClick={openModal} variant={buttonVariants.DARK}>
                    {t("learnMore")}
                </Button>
                <a target="_blank" href={link}>
                    <Image className={styles.gitImg} src={gitImg} alt={"git img"} />
                </a>
            </div>
            {createPortal(
                <AnimatePresence>
                    {modalVisible && (
                        <Modal
                            name={name}
                            link={link}
                            imgSrc={imgSrc}
                            stack={extendedStack}
                            desc={extendedDesc}
                            setIsVisible={setModalVisible}
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};
export default SharedNode;
