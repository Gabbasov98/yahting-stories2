import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "181.jpg",
                    "в переход мы шли вдвоем с Юлей, т.е. это вахты 4 через 4, Юля первый раз ходила в такой серьезный переход и отлично справилась :)"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "в Черногории мы решили продать яхты для нашего будущего проекта с новым переходом вокруг Европы, но.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "но в феврале 2022 года началась война между Россией и Украиной, и наши планы накрылись, часть участников были из России и Украины, мы решили отложить этот план до лучших времен",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "184.jpg",
                    "довольно давно я планировал переехать в Японию, и кажется, вся эта ситуация лишь подтолкнула меня, поэтому я принял решение..",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "..переезжать в Японию, процесс переезда в другую страну всегда не быстрый"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "186.jpg",
                    "на этот переезд суммарно у меня ушло около полугода, подготовка документов, сам переезд, обустройство в Японии",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Вам интересно узнать про мою жизнь в Японии?"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Кому интересно узнать про мою жизнь в Японии - я попозже открою личный аккаунт, где буду рассказывать про все остальное, что не касается яхт"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "189.jpg",
                    "продолжаем про яхтинг! Летом 2022 года я стал изучать азиатский яхтинг и решил проехаться по основным странам и местам где есть яхтинг",
                    "_top"
                )
            );
        },
    },

    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "я побывал во всех маринах на Лангкави, Пенанге, Пхукете и Паттайе, это около 10 марин, а их в Азии очень мало"
                )
            );
        },
    },
]
