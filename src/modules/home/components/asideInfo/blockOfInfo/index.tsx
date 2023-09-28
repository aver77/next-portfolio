"use client";

import { FC, Fragment } from "react";
import { useTranslations } from "next-intl";
import Title, { titleTypes } from "@/shared/ui/title";
import cx from "classnames";
import Line, { lineAligns } from "@/shared/ui/line";

import { motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

import SquareComponent from "@/shared/assets/svg/components/squareComponent";
import styles from "./styles.module.scss";
import cssVars from "@/shared/styles/vars.module.scss";

interface IBlockOfInfo {
    infoTitle: string;
    info: Array<{ title: string; description: string; year?: string; link?: string } | string>;
    withDots?: boolean;
}
const BlockOfInfo: FC<IBlockOfInfo> = ({ infoTitle, info, withDots }) => {
    const t = useTranslations("home");

    const infoElement = info.map((infoEl, index) => {
        if (typeof infoEl !== "string") {
            const { year, title, description, link } = infoEl;

            const isPhoneTitle = title.includes(t("tel"));
            const isMailTitle = title.includes(t("mail"));

            const isRegularTitle = !isPhoneTitle && !isMailTitle;

            return (
                <Fragment key={"_" + index + title}>
                    <Title
                        className={cx(styles.title, styles.titleH4)}
                        text={title}
                        titleType={titleTypes.h4}
                    />
                    {year && <p className={styles.text}>{year}</p>}
                    {isRegularTitle ? (
                        !link ? (
                            <span className={styles.text}>{description}</span>
                        ) : (
                            <a target="_blank" className={styles.text} href={link}>
                                {description}
                            </a>
                        )
                    ) : (
                        <a
                            className={styles.text}
                            href={`${isPhoneTitle ? "tel" : "mailTo"}:${description}`}
                        >
                            {description}
                        </a>
                    )}
                </Fragment>
            );
        } else {
            return (
                <Fragment key={"_" + index + infoEl}>
                    {withDots ? (
                        <ul>
                            <li className={cx(styles.text, styles.li)}>
                                <SquareComponent color={cssVars.light} />
                                <span>{infoEl}</span>
                            </li>
                        </ul>
                    ) : (
                        <p className={styles.text}>{infoEl}</p>
                    )}
                </Fragment>
            );
        }
    });

    return (
        <motion.div {...smoothAppearing} className={styles.container}>
            <Title
                className={cx(styles.title, styles.titleH3)}
                text={infoTitle}
                titleType={titleTypes.h3}
            />
            <Line thickness={"2px"} className={styles.line} align={lineAligns.horizontal} />
            {infoElement}
        </motion.div>
    );
};
export default BlockOfInfo;
