import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "91.jpg",
                    "Эта Albin Vega обошлась мне в 6500 евро, изначально она стоила 8500 евро, но у меня получилось сторговаться",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "92.jpg",
                    "У этой лодки в объявлении была всего 1 невзрачная фотография и…"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "только на основе своего опыта я понял, что там может быть что-то интересное",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "94.jpg",
                    "В первую неделю мы вложили ещё 3000 евро"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Мы подготовили лодку за 5 дней, но мы работали с раннего утра до поздней ночи и чуть не расстались перед путешествием",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "96.jpg",
                    "в какой-то момент я думал “Зачем я все это затеял?”",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "97.jpg",
                    "но мы уже все подготовили, пути назад уже нет, и дальше нам нужно идти в южные моря",
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
                    "за 70 дней мы пришли в Тунис, мы прошли Балтийское море, Северное море, Ла-Манш, Бискайский залив, Французские каналы, Лионский залив и Средиземное море"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "99.png",
                    "Балтийское море славится своей короткой волной и холодной водой",
                    "_center _black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "100.png",
                    "Северное море известно своей суровостью, там уже начинаются течения, но там очень красивый светящийся планктон!",
                    "_center _black"
                )
            );
        },
    },
]
