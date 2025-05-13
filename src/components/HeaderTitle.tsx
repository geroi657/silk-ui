import type { HeaderTitleProps } from "../types/HeaderTitle.types.ts";

export default function HeaderTitle({ title } : HeaderTitleProps ) {
    return (<h1>{ title }</h1>);
}