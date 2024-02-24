import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "51.jpg",
                    "Ещё мы жили по каучсерфингу, чтобы сэкономить деньги, т.к. жилье в Швеции очень дорогое.",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "52.jpg",
                    "Мы искали Albin Vega в диапазоне 1000-5000 евро, и мы посмотрели их огромное количество!",
                    "_top _black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "53.jpg",
                    "Поняли, что Albin Vega в районе 1000 евро – это хлам, если у тебя есть 1000 евро, то лучше смотреть в сторону лодки в районе 7 метров типа Viggen."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "54.jpg",
                    "Когда мы уже отчаялись и думали, что не найдем хорошей лодки, мы ее нашли."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "55.jpg",
                    "2016 год, мы купили вторую яхту, и это легендарная Albin Vega. Она уже с закруткой, в нормальном состоянии, но с подвесным двигателем 🙁",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "56.jpg",
                    "мы купили оборудование, которого не хватало, купили аккумуляторы (возили их на электричке :D ) эх, молодость!.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    " наш план был дойти до Амстердама, вернуться обратно, дойти до Финляндии, и там выставить лодку на продажу"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Когда мы дошли до шведского города Нюнесхамн, мы поняли, что с подвесным двигателем далеко не уйдем"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "У нас был двухтактный подвесной двигатель 15 л.с., и он мог потреблять до 5 литров в час, это очень дорого!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "60.jpg",
                    "Вы скажете: “это же парусная яхта, причем тут двигатель?”"
                )
            );
        },
    },
]
