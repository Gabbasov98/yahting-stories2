import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "но нам хотелось поскорее дойти до дома, а это Фукуока"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "еще 4 дня, и мы в Фукуоке"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-73.jpeg",
                    "невероятно! В 2019 году я только думал о переезде в Японию, я был в Одо Марине и только представлял себе, как тут может стоять моя Albin Vega",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-74.jpeg",
                    "в этот же момент я понимал, что вряд ли приду сюда на Albin Vega",
                    "_top _black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-75.jpeg",
                    "но я  и представить себе не мог, что приду сюда на Hallberg-Rrassy 382"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "по завершению путешествия у меня было еще очень важное дело!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "мне нужно было провести розыгрыш 2 яхт для нашего сообщества",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-78.jpg",
                    "из-за того что мое путешествие затянулось, сам я не смог поехать и попросил своего помощника Диму",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-79.jpg",
                    "он поехал в Швецию, нашел 2 хорошие лодки",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Инесса выиграла Maxi 77"
                )
            );
        },
    },
]
