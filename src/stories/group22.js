import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "..идеально подходит для этого!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "212.jpg",
                    "но как мы помним, он далеко не идеален сам по себе, и мы решили его максимально обновить!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "213.jpg",
                    "про обновление HR 382 будет отдельная ветка сторис и посты, следите за сторис! Если видите кружок с моим лицом - нажимайте, сторис доступны всего сутки!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "давайте вернемся к моему курсу “Капитан небольшой яхты” и книге “Руководство по покупке яхты от А до Я”, посмотрите что у нас получилось"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "это список тем которые разобраны в книге"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "это список тем которые разобраны в курсе"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "в курсе и книге разобрано все что нужно, чтобы реализовать свою мечту"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "218.jpg",
                    "как вы уже знаете, я начинал с небольшой лодки за 1200 евро, я прошел большой путь, и теперь.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "219.jpg",
                    "после того как мы закончим все ремонты, у нас будет супер обновленная экспедиционная Hallberg-Rassy ценностью около 300 000 евро"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Но все начиналось с лодки за 1200 евро, и начать может каждый из вас",
                    "_center"
                )
            );
        },
    },
]
