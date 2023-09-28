"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { ICompany } from "../defaultData";
import Title, { titleTypes } from "@/shared/ui/title";
import cx from "classnames";

import { motion } from "framer-motion";
import { smoothAppearing } from "@/shared/constants/animationProps";

import SquareComponent from "@/shared/assets/svg/components/squareComponent";
import styles from "./styles.module.scss";
import cssVars from "@/shared/styles/vars.module.scss";

const Company: FC<ICompany> = ({
    jobTitle,
    companyName,
    companyLocation,
    companyDescription,
    companyYears,
    skills,
    workingProcess
}) => {
    const t = useTranslations("home");

    console.log(companyDescription.includes("\n"));

    return (
        <motion.div {...smoothAppearing}>
            <Title
                className={cx(styles.text, styles.title)}
                text={jobTitle}
                titleType={titleTypes.h4}
            />
            <div className={cx(styles.text, styles.aboutCompany)}>
                <span className={styles.companyName}>{companyName}</span>|
                <span>{companyLocation}</span>|<span>{companyYears}</span>
            </div>
            <ul className={cx(styles.descriptionUl)}>
                {companyDescription.split("\n").map((descriptionEl, index) => (
                    <li className={cx(styles.lightText, styles.descriptionLi)} key={index}>
                        <SquareComponent color={cssVars.lightGray} />
                        {descriptionEl}
                    </li>
                ))}
            </ul>
            <div className={cx(styles.text, styles.skills)}>
                <span className={styles.externalTitle}>{t("skills")}</span>
                <span>: {skills}</span>
            </div>
            <div className={styles.text}>
                <span className={styles.externalTitle}>{t("workingProcess")}</span>
                <span>: {workingProcess}</span>
            </div>
        </motion.div>
    );
};

export default Company;
