import type { HeaderTitleProps } from "../types/HeaderTitle.types.ts";
import "../styles/HeaderTitle.styles.css";

export default function HeaderTitle({ title } : HeaderTitleProps ) {
    return (<h1 className={ "HeaderTitle" }>{ title }</h1>);
}