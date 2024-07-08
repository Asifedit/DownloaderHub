import React from "react";
import "../styles/info.css";

const Info = ({ data }) => {
    const getSortOrder = (quality) => {
        if (quality.includes("(no_audio)")) {
            return 3;
        } else if (quality.includes("audio")) {
            return 2;
        } else {
            return 1;
        }
    };

    const sortedLinks = data.links.sort((a, b) => {
        return getSortOrder(a.quality) - getSortOrder(b.quality);
    });

    return (
        <div className="info">
            <h2>Video Info</h2>
            <p>
                <img src={data.picture} alt="ideo Thumbnail" />
            </p>
            <p className="title-video">{data.title}</p>
            <ul>
                {sortedLinks.map((link, index) => (
                    <div className="dw-data" key={index}>
                        <p className="quality">
                            {link.quality
                                .replace("sd_", " ")
                                .replace("render_720p", " 720p (recomended)")
                                .replace("hd_", " ")
                                .replace("render_", "")
                                .replace("(no_audio)", "🔇")}
                        </p>
                        <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Info;