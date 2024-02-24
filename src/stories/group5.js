import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "путешествовали по Балтике"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "ещё немного видео из архива"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "43.jpg",
                    "и поняли, что нам нужна лодка побольше, я смотрел в сторону Albin Vega, я очень много про нее читал, и это была можно сказать моя новая мечта."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "44.JPG",
                    "в 2015 году осенью мы продаем наш Happy за 3000 евро"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Мы купили ее за 1200 евро и продали за 3000 евро в Финляндии, там яхты стоят дороже",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Таким образом мы отбили все вложения, все затраты, включая авиабилеты, топливо и даже еду!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Мы правильно купили лодку и мы смогли увеличить ее стоимость, сделать свой яхтинг бесплатным!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Классный подход?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "49.jpg",
                    "Наступил 2016 год, и мы снова едем в Швецию за лодкой, теперь уже за Albin Vega!",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "50.jpg",
                    "Так сложилось, что нам пришлось передвигаться общественным транспортом. Электрички, автобусы и метро"
                )
            );
        },
    },
]
