import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-91.png",
                    "Лодка из Норвегии, поэтому состояние фантастическое! "
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-92.png",
                    "Есть отдельно выделенный туалет и душ",

                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-93.png",
                    "Есть все необходимые навигационные приборы",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-94.png",
                    "Отдельная носовая каюта и кормовая"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Вы спросите, как поучаствовать и как выиграть приз?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Сейчас расскажу…",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Как вы наверное знаете, у меня был видеокурс «Капитан НЕБОЛЬШОЙ яхты»",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Теперь сейчас я записываю новый контент и сильно расширяю курс, мы добавим более 200 новых видео!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Теперь курс будет называться «Капитан СОБСТВЕННОЙ яхты», новый контент касается не только размера лодки",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "В новом контенте я показываю разные технологии, которые используются на разных типах лодок",
                    "_center"
                )
            );
        },
    },
]
