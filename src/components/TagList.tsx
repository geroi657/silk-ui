import Tag from "./TagListItem";
import type { tagList } from "../types/TagList.types.ts";
import "../styles/TagList.styles.css";

function handleUndefined() {
    console.error("Unexpected error encountered in TagList component.\n\n tagsList is undefined.");
    
    return <p className={"TagListNoTags"}>No tags were found</p>
}

export default function TagList({ tagsList, tagAction } : { tagsList: tagList | undefined, tagAction: ((...args : unknown[]) => void) | undefined }) {
    return (<div className={"TagList"}>
        { tagsList !== undefined ? (tagsList?.length > 0 ? tagsList.map((tag) => (
            <Tag
                key = { tag.id }
                id = { tag.id }
                name = { tag.name }
                action = { tagAction }
            ></Tag>
        )) : <p className={"TagListNoTags"}>No tags were found</p>) : handleUndefined()}
    </div>)
}