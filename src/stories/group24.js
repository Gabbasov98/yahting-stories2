import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "получить руководство и курс, то вы можете перейти по ссылке",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Секретная скидка для тех кто досмотрел до конца! 79 евро вместо 140 евро! Только 24 часа!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "либо напишите мне в директ",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "233.png",
                    "это отзыв того самого Алексея"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "234.png",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "235.png",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryWithoutTextRender(
                    "236.png",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Курс и книгу можно купить тут, также там есть список тем ",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Секретная скидка для тех кто досмотрел до конца! 79 евро вместо 140 евро! Только 24 часа!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Спасибо, что дочитали до конца, я буду продолжать делать такие серии сторис, если вам интересно мое творчество – то ссылка на курс и книгу также есть в профиле сообщества",
                    "_center"
                )
            );
        },
    },
]
