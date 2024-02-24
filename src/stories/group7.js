import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "61.jpg",
                    "А дело в том, что если вы хотите соблюдать какие-то сроки и не хотите бороться со стихией, то вам нужен хороший двигатель, когда у вас неудобный ветер",
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
                    "Нашей ошибкой было думать, что мы будем использовать лавировку для круизных путешествий"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Когда был штиль, у нас была дилемма: двигаться со скоростью 400 метров в час или включать двигатель и двигаться со скоростью 10 км в час и 10 евро в час, т.е. 1 км = 1 евро, а для нас тогда это было дорого",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Также мы понимали, что если пойдем в таком режиме в Амстердам, то не успеем вернуться, и нам придется платить дорогую стоянку",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "65.jpg",
                    "после некоторых раздумий мы решаем идти сразу в Финляндию и выставлять лодку на продажу"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "66.jpg",
                    "в 2016 осенью мы путешествовали все лето по Балтике и осенью продаем нашу Albin Vega с мыслью.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Основная мысль при продаже: стационарный двигатель потребляет 1 литр в час, а не 5 литров, и для нас это супер важно!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "в 2017 году я нахожу очень классную Albin Vega, с максимальным количеством обновлений, но к сожалению, у меня не получается ее купить, и я теряю залог",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "69.jpg",
                    "в 2017 году мы едем на Средиземку. Мы хотим понять нравится нам там или нет"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "70.jpg",
                    "В конечном счете мы мечтаем о теплой Средиземке, мерзнуть в Балтике нам порядком надоело",
                    "_top"
                )
            );
        },
    },
]
