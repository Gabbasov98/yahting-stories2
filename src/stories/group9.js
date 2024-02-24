import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "81.jpg",
                    "В принципе звучит реалистично, но надо учитывать ещё каналы",
                    "_top _black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "82.jpg",
                    "Каналы работают только днем, а это значит, никаких ночных переходов",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "83.jpg",
                    "А ещё в каналах шлюзы, их 100 штук, и предположительно на весь участок с каналами уйдет 2 недели"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "84.png",
                    "Страшно, много неизвестности, но мы едем в Швецию и планируем это сделать",
                    "_black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "85.jpg",
                    "У меня уже есть опыт осмотра лодок, я знаю, чего хочу, я уже посмотрел огромное количество Albin Vega"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "86.jpg",
                    "теперь мы едем за конкретной лодкой и на всякий случай выбрали несколько запасных"
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
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "87.jpg",
                    "по приезду я вижу Renate издалека, и в первую же секунду понимаю, что кажется, это то, что нам нужно.",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "88.jpg",
                    "на фото все было хорошо, но в жизни Renate выглядела сильно лучше"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "89.jpg",
                    "владелец был дедушка, который, похоже, не умеет фотографировать, но зато умеет следить за лодкой!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Спойлер! На этой лодке мы пройдем вокруг Европы без каких-либо серьезных проблем и поломок."
                )
            );
        },
    },
]
