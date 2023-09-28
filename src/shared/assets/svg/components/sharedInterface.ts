import { CSSProperties } from "react";

export interface ISvgComponent {
    color: string;
    width?: `${number}px`;
    height?: `${number}px`;

    style?: CSSProperties;
    className?: string;
}
