import React from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./../images', false, /\.(png|jpe?g|svg|JPG|PNG|HEIC)$/));

export default {
    textStoryRender: (Text,Position) => {
        const textClassList = ["story-card__text",Position].join(" ")

        return (
            <div className={"story-card"}>
                <div className={textClassList}>
                    <div className="text">
                        {Text}
                    </div>
                </div>
            </div>
        )
    },
    imgStoryRender: (imgSrc, Text,Position,imgStyle) => {
        const textClassList = ["story-card__text",Position].join(" ")
        const imgClassList = ["story-card__img",imgStyle].join(" ")
        return (
            <div className={"story-card"} style={contentStyle}>
                <img className={imgClassList} src={images[imgSrc]} />
                <div className={textClassList}>
                    <div className="text">
                        {Text}
                    </div>
                </div>
            </div>
        )
    },
    imgStoryWithoutTextRender: (imgSrc) => {
        return (
            <div className={"story-card"} style={contentStyle}>
                <img className={"story-card__img"} src={images[imgSrc]} />
            </div>
        )
    },
    videoStoryRender: (videoSrc, Text, Position) => {
        const textClassList = ["story-card__text",Position].join(" ")
        return (
            <div className={"story-card"} style={contentStyle}>
                <video src={videoSrc}
                       playsinline autoPlay webkitPlaysInline="true"
                       style={fullImage}>
                </video>
                <div className={textClassList}>
                    <div className="text">
                        {Text}
                    </div>
                </div>
            </div>
        )
    }
}
const contentStyle = {
    background: "#333",
    width: "100%",
    padding: 0,
    color: "white",
    height: "100%",
    position: "relative",
};

const fullImage = {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    display: "block",
    objectFit: "cover",
};
