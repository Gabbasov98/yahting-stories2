import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Нет :D с точки зрения рисков это был супер рискованный вариант!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Мудро ли я поступил?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Я считаю что да, потому что я не обманывал себя и сделал так, как действительно хотелось.",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "24.jpg",
                    "Это Алиса, новая девушка, эту фотографию сделала моя бывшая в 2014 году, когда они вместе гуляли. Красотка, правда?"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "25.jpg",
                    "Спойлер! С Алисой мы обошли на яхте вокруг Европы, проехали около 25 стран, отношения длились 5 лет, на данный момент это были мои самые длительные отношения.",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "26.jpg",
                    "А что там с яхтой-то?"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "27.png",
                    "В 2014 году я еду в Швецию к другу, с которым мы играли в World of Warcraft"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "28.png",
                    "да, вы правильно прочитали, я играл в тот момент в World of Warcraft и был троллем 80 уровня :d"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "29.jpg",
                    "А вы играли в World of Warcraft?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я был главой пиратской гильдии, а Гунар (так зовут моего друга из Швеции) часто с нами играл. Как-то я спросил, откуда он, а он сказал “Из Швеции”",
                    "_center"
                )
            );
        },
    },
]
