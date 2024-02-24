import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "191.jpg",
                    "я изучал Азиатский рынок и присматривал себе лодку"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я нашел отличный Najad 36, но он ушел до того, как я приехал на Лангкави, но зато..",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "193.jpg",
                    "зато мне сказали, что появился интересный HR 382, и я поехал его смотреть!",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "194.jpg",
                    "Когда я приехал, я оценил его состояние, и это было очень классно, но там были проблемы.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "проблемы с тиком, старый двигатель и вопросы по стоячему такелажу, а также были сколы на пластике, и их было довольно много..",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "это нормально когда ты покупаешь лодку за 5-10 тысяч евро, но когда лодка стоит больше 100 тысяч евро? Ты думаешь, что покупаешь идеальную яхту, но она далеко не идеальна",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "197.jpg",
                    "после сюрвея и детального осмотра я решил, что, во-первых, она довольно дорогая для меня, это слишком большой скачок, во вторых..",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "там очень много работы, чтобы довести ее до идеала, и это очень много денег! Что я сделал?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я отказался от покупки этой лодки, и она на следующий же день ушла другому покупателю Новозеландцу. Спустя 3 дня я понял, что допустил ошибку..",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "потом я полгода ездил по маринам, смотрел лодки, но все было не то, все было сильно хуже, чем HR 382",
                    "_center"
                )
            );
        },
    },
]
