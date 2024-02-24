import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "151.png",
                    "и.. создаю сообщества во всех соц.cетях, начинаю набирать подписчиков с помощью рекламы и начинаю считать окупаемость",
                    "_black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "окупаемость у меня получается около года, в принципе это мне подходит, мы рекламируемся с расчетом на будущие, вкладываем довольно много денег",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я вижу, как люди, которые никогда не думали о яхтинге, начинают думать о яхтинге!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Вы думали о яхтинге до того, как подписались на мой аккаунт?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Что-то я совсем не рассказал про своих яхтенных девушек",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "156.jpg",
                    "в 2019 году мы расстаемся с Алисой"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "ситуация на самом деле была примерно такая же как и в 2014 году, отношения подошли к своему концу, я изменился, она изменилась, и наши пути разошлись",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "158.JPG",
                    "через несколько недель я знакомлюсь с актрисой, ее зовут Наташа"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "мы общаемся, а через 2 месяца мы едем в Африку, в Тунис, на лодку 8 метров делать ремонт",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "160.JPG",
                    "мы красим лодку внутри, приводим ее в порядок, шьем новые подушки, все обновляем, все это заняло 2 месяца"
                )
            );
        },
    },
]
