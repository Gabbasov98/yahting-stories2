import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Это были Николай, Борис и Алексей",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Я отвечал на их вопросы и добавлял эти вопросы в свою книгу, т.е. отвечая на их вопросы, я улучшал свою книгу!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Потом я выпустил книгу, и это были первые 3 человека кому я отправил ссылки на нее. Книга стоила 35 евро, как думаете, кто из них ее купил?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "121.jpg",
                    "Ее в итоге купил только Алексей, а Борис и Николай несколько недель говорили, что купят попозже, но в итоге так и не купили :)",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Книга была запущена в апреле 2019 года, и за год я продал около 1000 экземпляров книги",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "1000 экземпляров книги – это достаточно много, особенно для такой узкой тематики как яхтинг! Но…",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "..но так как я маркетолог, предприниматель, и у меня есть команда, то мы конечно же пустили все свои навыки и сделали отличные продажи на первый взгляд",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Вы можете посчитать 35х1000= 35 000 евро, верно? Верно, только это без учета налогов и затрат на рекламу",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "На рекламу уходило от 50 до 70% стоимости книги + налоги, в итоге хорошо если я заработал на этом 10 000 евро за год чистыми :D",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "127.jpg",
                    "давайте вернемся к Алексею, он купил книгу, прочитал ее и начал планировать реализацию своей мечты, сейчас расскажу.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "128.jpg",
                    "у Алексея не было наличных, но у него была машина и мотоцикл, которые он решил продать, чтобы купить яхту и отправиться в Средиземное море",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "129.jpg",
                    "Перед поездкой у его женщины произошла серьезная ситуация с глазом, но они сделали операцию и не отложили планы, они решили все равно ехать, несмотря ни на что!",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "это была весна 2019 года, Алексей продает сначала машину, мотоцикл и едет в Швецию",
                    "_center"
                )
            );
        },
    },
]
