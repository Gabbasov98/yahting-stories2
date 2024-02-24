import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "нам кажется, что еще вот неделя или максимум две, и он закончит"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "внутри тоже многие работы сделаны, но работа еще есть, новые подушки сделал другой подрядчик"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "вот так это выглядит снаружи"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "толщина корпуса более 30мм!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "в итоге проходит 2 недели, и я понимаю..",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "что с таким прогрессом хорошо, если мы закончим через 2 месяца!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "основной подрядчик Джефри убеждает, что нет! вот-вот и закончим",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "ждем еще 2 недели, и я убеждаюсь в своей правоте, и в итоге..",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "мы уезжаем обратно в Японию, так как мне нужно еще работать над другими проектами",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "26 апреля 2023 года мы снова приезжаем в Малайзию, нам снова говорят, что вот-вот закончат",
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
                    "еще не все сделано, но уже реально близко к завершению"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "2 мая 2023 года мы наконец-то спускаем лодку в воду"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-20.jpeg",
                    "мы еще не все доделали и будем продолжать доделывать ремонт вплоть до начала путешествия",
                    "_top"
                )
            );
        },
    },
]
