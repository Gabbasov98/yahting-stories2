import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "161.jpg",
                    "так лодка выглядела до нашего ремонта"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "162.jpg",
                    "так лодка стала выглядеть после ремонта"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "163.jpg",
                    "вы можете подумать, что я издеваюсь над своими девушками, но это не так 😀"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "164.JPG",
                    "мы вместе прошли из Туниса до Греции, и там она улетела по своим актерским делам"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "165.jpg",
                    "это были яркие, но короткие отношения, которые закончились разбитыми бокалами, разорванной майкой и стеной в вине в арендной квартире :D"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "сейчас все хорошо, мы друзья и иногда общаемся",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "167.jpg",
                    "а теперь я познакомлю вас с Юлей, это тот человек, благодаря кому вы узнали о нашем сообществе"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "168.JPG",
                    "Юля занимается у нас рекламой в нашей компании и по совместительству моя девушка"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "169.jpg",
                    "также Юля помогала с записью курса “Капитан небольшой яхты”, о котором я вам расскажу чуть позже..",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "с Юлей мы вырастили эти сообщества и сейчас суммарно во всех соц. сетях у меня больше 400 000 подписчиков!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Продолжение завтра в это же время! Поставь будильник ;)",
                    "_center"
                )
            );
        },
    },
]
