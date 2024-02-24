import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "101.png",
                    "Ла-Манш – это место, где течение достигает 5-6 узлов, приливы и отливы каждые 6 часов, а высота прилива до 15 метров!",
                    "_center _black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "102.png",
                    "Бискайский залив знаменит буйной погодой и огромным количеством кораблей на дне!",
                    "_center _black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "103.jpg",
                    "Французские каналы в нашем случае – это около 100 шлюзов!",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "104.jpg",
                    "Лионский залив опасен из-за Мистралей, которые периодически там бушуют, оттуда и название"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "105.jpg",
                    "Тунис для нас был дикой страной, в которой ещё недавно была война, и было полное непонимание, что на самом деле там будет"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "106.jpg",
                    "Про Тунис мы узнали от друзей, которые там стояли, но пока сам не попробуешь, конечно будут сомнения.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Тем более когда ты понимаешь, что это Африка, а Африка по безопасности – это далеко не Европа",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "108.jpg",
                    "К счастью, Тунис оказался отличным местом, особенно марина в Монастире"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "109.jpg",
                    "Тунис – это место, где можно поставить свою небольшую яхту за 800 евро в год вместе с водой и электричеством!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                <div className={"story-card"}>
                    <div className="story-card__text _center">
                        <div className="text">
                            для сравнения в Италии цены были 3000-4000 евро в год + коммунальные услуги, а в Тунисе всего 800 евро! <br/>
                            Круто, да?
                        </div>
                    </div>
                </div>
            );
        },
    },
]
