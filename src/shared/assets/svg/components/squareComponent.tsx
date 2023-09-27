import {FC} from "react";
import {ISvgComponent} from "./sharedInterface";

const SquareComponent: FC<ISvgComponent> = ({color, width, height, className, style}) => {
    const calculatedWidth = width ?? "16px";
    const calculatedHeight = height ?? "16px";

    return (
        <svg className={className}  style={{
            minWidth: calculatedWidth,
            width: calculatedWidth,
            minHeight: calculatedHeight,
            height: calculatedHeight,
            ...style ?? {}
        }}  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C12 12.4477 12.4477 12 13 12H35C35.5523 12 36 12.4477 36 13V35C36 35.5523 35.5523 36 35 36H13C12.4477 36 12 35.5523 12 35V13Z" fill={color}/>
        </svg>
    )
}
export default SquareComponent;