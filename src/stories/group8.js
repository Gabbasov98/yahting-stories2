import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "71.jpg",
                    "Мы походили на яхте в Средиземке и нам дико понравилось, решили, что на следующий год мы поедем снова за яхтой в Швецию и пойдем в Средиземку",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Я изучаю маршрут, думаю, как нам успеть за 1 сезон",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "73.png",
                    "Вот такой маршрут у нас получился",
                    "_black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Я читаю блог одного яхтсмена, который ходил подобным маршрутом, но у него ушло 3 года",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Читаю блог другого яхтсмена, мало кто так ходит, мало информации",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "76.jpg",
                    "есть довольно сильное беспокойство, что мы не справимся потому что.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "77.jpg",
                    "нам нужно купить лодку, нужно ее зарегистрировать, подготовить и пройти огромное количество миль! На все есть максимум 90 дней"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "78.jpg",
                    "Предположительно мы можем идти около 100 морских миль в сутки, если идти нон-стоп",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "79.png",
                    "Наш маршрут – это около 3000 морских миль, т.е. 30 суток нон-стоп",
                    "_black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "80.jpg",
                    "Если на путешествие закладывать 70 дней, то это 30 суток переходов и 40 суток отдыха (включая плохую погоду)."
                )
            );
        },
    },
]
