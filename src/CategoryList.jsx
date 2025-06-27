import React from "react";
import { AnchorListItem } from "./AnchorListItem";

const categories = [
    // "Projects",
    // "Games",
    "Blog",
    // "About",
    // "Contact",
    "LinkedIn"
    // "Resume",       
];

function CategoryList({ items = categories }) {

    return (
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="lists">
            {/* <h2 className="nes-text is-primary">Categories</h2> */}
            <h2 className="nes-text is-primary">Categories</h2>
            <ul className="nes-list is-circle">
                {items.map((category) => (<AnchorListItem category={category} />))}
            </ul>
        </section>
    );
}

export default CategoryList;