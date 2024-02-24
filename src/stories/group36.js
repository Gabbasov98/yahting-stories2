import renderStory from "../methods/renderStory";
import React from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./../images', false, /\.(png|jpe?g|svg|JPG|PNG|HEIC)$/));

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-111.jpg",
                    "также если вы хотите попутешествовать со мной гарантированно — у меня есть ограниченное количество тарифов, уже включающих путешествие",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                <div className={"story-card"}>
                    <div className="story-card__text _center">
                        <div className="text _flags">
                            новый курс будет также доступен на основных языках:
                            <span><img src={images["gb.svg"]} alt=""/>English,</span>
                            <span><img src={images["ger.svg"]} alt=""/>Deutsch, </span>
                            <span><img src={images["est.svg"]} alt=""/>Eesti, </span>
                            <span><img src={images["sp.svg"]} alt=""/>Español, </span>
                            <span><img src={images["fr.svg"]} alt=""/>Français, </span>
                            <span><img src={images["hr.svg"]} alt=""/>Hrvatski, </span>
                            <span><img src={images["it.svg"]} alt=""/>Italiano, </span>
                            <span><img src={images["lat.svg"]} alt=""/>Latviešu, </span>
                            <span><img src={images["lit.svg"]} alt=""/>Lietuvių, </span>
                            <span><img src={images["hun.svg"]} alt=""/>Magyar, </span>
                            <span><img src={images["ned.svg"]} alt=""/>Nederlands, </span>
                            <span><img src={images["den.svg"]} alt=""/>Dansk, </span>
                            <span><img src={images["nor.svg"]} alt=""/>Norsk, </span>
                            <span><img src={images["pol.svg"]} alt=""/>Polski, </span>
                            <span><img src={images["por.svg"]} alt=""/>Português, </span>
                            <span><img src={images["rom.svg"]} alt=""/>Română, </span>
                            <span><img src={images["slov.svg"]} alt=""/>Slovenčina, </span>
                            <span><img src={images["fin.svg"]} alt=""/>Suomi, </span>
                            <span><img src={images["sved.svg"]} alt=""/>Svenska, </span>
                            <span><img src={images["tur.svg"]} alt=""/>Türkçe, </span>
                            <span><img src={images["cz.svg"]} alt=""/>Čeština, </span>
                            <span><img src={images["gr.svg"]} alt=""/>Ελληνικά, </span>
                            <span><img src={images["bul.svg"]} alt=""/>Български, </span>
                            <span><img src={images["rus.svg"]} alt=""/>Русский, </span>
                            <span><img src={images["uk.svg"]} alt=""/>Українська, </span>
                            <span><img src={images["ch.svg"]} alt=""/>中文, </span>
                            <span><img src={images["jp.svg"]} alt=""/>日本語, </span>
                            <span><img src={images["kor.svg"]} alt=""/>한국어, </span>
                            <span><img src={images["uae.svg"]} alt=""/>العربية</span>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "изучите мой новый сайт, там я очень подробно рассказываю про все",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "также я хочу показать вам, что говорят люди о моем курсе",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img2.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img3.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img4.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img5.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img6.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img7.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img8.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img9.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "review-img10.jpg",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Зайдите на сайт и просто посмотрите :) там много всего интересного, даже если вы не собираетесь покупать курс",
                    "_center"
                )
            );
        },
    },
]
