import { FC, RefObject } from "react";
import WithModal from "@/shared/lib/hocs/WithModal";
import Image, { StaticImageData } from "next/image";

import Title, { titleTypes } from "@/shared/ui/title";
import cx from "classnames";

import gitImg from "@/shared/assets/svg/git.svg";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

interface IModal {
    imgSrc: StaticImageData;
    link: string;
    name: string;
    desc: string;
    stack: string;
    setIsVisible: (v: boolean) => void;
    ref?: RefObject<HTMLDivElement>;
}
const Modal: FC<IModal> = ({ imgSrc, link, name, desc, stack, setIsVisible, ref }) => {
    const t = useTranslations("projects");
    const closeModal = () => {
        setIsVisible(false);
    };

    return (
        <WithModal closeModal={closeModal}>
            <div ref={ref} className={styles.container}>
                <Image className={styles.projImg} src={imgSrc} alt={"project img"} />
                <Title
                    className={cx(styles.bold, styles.title)}
                    text={name}
                    titleType={titleTypes.h2}
                />
                <div className={styles.desc}>
                    {desc.split("\n").map((descEl, index) => (
                        <p className={cx(styles.text, styles.descEl)} key={index}>
                            {descEl}
                        </p>
                    ))}
                </div>
                <div className={cx(styles.text, styles.stack)}>
                    <p className={cx(styles.bold)}>{t("projectStack")}:</p>
                    <p>{stack}</p>
                </div>
                <a className={cx(styles.text, styles.projectLink)} target={"_blank"} href={link}>
                    <span className={styles.bold}>{t("sourceCode")}</span>
                    <Image className={styles.gitImg} src={gitImg} alt={"git image"} />
                </a>
            </div>
        </WithModal>
    );
};
export default Modal;
