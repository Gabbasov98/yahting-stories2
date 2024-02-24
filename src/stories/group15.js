import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "141.jpg",
                    "на этом фото я тоже только с моря, т.к. я в 2019 году путешествовал по Средиземке и ходил в Грецию, Италию и Мальту."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "142.jpg",
                    "я подарил ему тортик с названием его лодки, он был очень рад! :)"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "дальше мы стали общаться с Алексеем каждый день и однажды он спросил, у меня нет ли у меня для него удаленной работы?"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "мы подумали с братом над тем, что можем ему предложить, и так как мы уже хорошо знали друг друга, то мы придумали для него задачи, потом…"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "потом наступила зима, и мы разъехались с лодок по домам, я поехал в теплую Азию, а он к себе домой..",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "146.jpg",
                    "иногда мы ездили друг к другу в гости, постепенно мы становились все ближе и ближе, и теперь мы лучшие друзья!",
                    "_top _black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Спойлер! Я живу в Японии, и Алексей скоро также переезжает в Японию, об этом я расскажу позже :)",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "вернемся в 2019 год, именно тогда расходы на рекламу по книге начали превышать ее стоимость и…",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "когда вы уже продали свой продукт основной целевой аудитории, то стоимость затрат на рекламу увеличивается, а книга – это очень дешевый продукт, где очень быстро можно перейти черту",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "в 2019 году я придумываю идею публикации лодок каждые 48 часов для поддержания продаж своей книги и..",
                    "_center"
                )
            );
        },
    },
]
