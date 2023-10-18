import { FC, HTMLAttributes } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

export enum titleTypes {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6"
}

interface ITitle {
    text: string;
    titleType?: titleTypes;
}
const Title: FC<ITitle & HTMLAttributes<HTMLHeadElement>> = ({
    text,
    titleType,
    ...basicProps
}) => {
    const { className, ...restBasicProps } = basicProps;

    const getTitleProps = (style: string) => ({
        className: cx(style, className),
        ...restBasicProps
    });

    const titleObj = {
        [titleTypes.h1]: <h1 {...getTitleProps(styles.titleH1)}>{text}</h1>,
        [titleTypes.h2]: <h2 {...getTitleProps(styles.titleH2)}>{text}</h2>,
        [titleTypes.h3]: <h3 {...getTitleProps(styles.titleH3)}>{text}</h3>,
        [titleTypes.h4]: <h4 {...getTitleProps(styles.titleH4)}>{text}</h4>,
        [titleTypes.h5]: <h5 {...getTitleProps(styles.titleH5)}>{text}</h5>,
        [titleTypes.h6]: <h6 {...getTitleProps(styles.titleH6)}>{text}</h6>
    };

    return titleObj[titleType ?? titleTypes.h1];
};
export default Title;
