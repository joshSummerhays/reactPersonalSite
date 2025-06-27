import React  from 'react';

export const AnchorListItem = ({category}) => {
    let link
    if (category === "Blog") {
        link = "https://jsummerblog.wordpress.com/";
    } else if (category === "LinkedIn") {
        link = "https://www.linkedin.com/in/summerhaysjosh/";
    } else {
        link = "#"; // Default link if not specified
    }

    return (
        <a
            key={category}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <li
                key={category}
                style={{ cursor: "pointer", margin: "1rem 0" }}
            >
                {category}{category === "LinkedIn" ? (<i class="nes-icon linkedin is-small" style={{ marginLeft: ".5rem" }}></i>) : ""}
            </li>
        </a>
)};
