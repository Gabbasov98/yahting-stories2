import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "У меня есть отношения, которым 4 года, вроде бы все хорошо, но есть много разных нюансов, из-за которых…",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    " ..из-за которых если спрашиваешь себя “А я действительно счастлив с этим человеком?” и сложно ответить на 100% “Да!”",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "13.jpg",
                    "у меня есть подруга, которая мне очень нравится, но у нее есть парень, они ругаются, а у нас наоборот очень классное общение, я вижу, что мы нравимся друг другу"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "14.jpeg",
                    "передо мной встает вопрос: что мне делать?"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я могу поехать за яхтой с проверенной девушкой, либо с девушкой, которая мне очень нравится, в которую я уже влюблен, но я понятия не имею, как она себя проявит",
                    "_center"
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
                            как бы вы поступили бы на моем месте? <br/>
                            *опрос 1 вариант: “Поехал бы покупать яхту с проверенной девушкой”, <br/>
                            2 вариант “Расстался бы и начал бы встречаться с новой”
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "18.jpg",
                    "Я решил, что жизнь одна, и что лучше я сделаю и буду жалеть о том, что сделал, чем не сделаю, и буду жалеть о том, чего не сделал.",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "19.jpg",
                    "Я расстался, порвал отношения, которым было 4 года, и начал новые с планом поехать покупать яхту через несколько недель 😀",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Умно ли я поступил?",
                    "_center"
                )
            );
        },
    },
]
