import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я постоянно на связи, т.к. понимаю важность всего происходящего, он смотрит лодки, и я даю ему обратную связь",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "132.jpg",
                    "после просмотра нескольких лодок он выбирает Marieholm 32e, ему ужасно повезло с ценой!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "эту историю подробно и с цифрами, кто сколько потратил и сколько заработал, я буду рассказывать в вебинаре, обязательно посмотрите его! Ссылка будет позже",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "134.jpg",
                    "вернемся к Алексею. Он покупает лодку, готовит ее и выходит в море. Опыта у Алексея было не так много, по большей части это была обычная яхтенная школа и все!",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "мы думаем о его осадке и приходим к выводу, что мой маршрут ему не подходит и ему нужен другой план. Какой?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "136.png",
                    "Алексей принимает решение идти полный путь каналами прямо из Нормандии в Средиземное море через всю Францию",
                    "_black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "однажды у нас была ситуация, когда я никак не получал от него сообщения, и тогда я понял…",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "..что у него не включен роуминг на телефоне, отправил ему смску, чтобы он его включил, и интернет появился, он вышел на связь",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "важно иметь опытного человека на связи, который будет помогать и подсказывать, если у вас есть вопросы - вы можете мне писать!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "140.jpg",
                    "в итоге примерно через 70 дней Алексей пришел в Тунис, на этом фото мы первый раз встретились в жизни"
                )
            );
        },
    },
]
