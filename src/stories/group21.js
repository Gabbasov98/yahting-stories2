import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "201.jpg",
                    "потом вообще мои акции пошли вниз (как и у всех вас, наверное), вы торгуете акциями?"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "202.jpg",
                    "бюджет на лодку ушел в просевшие акции фейсбука, после отчета он показал -25% за 1 день!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "203.jpg",
                    "через месяц мои акции выходят в +2000$, я их продаю и решаю на всякий случай глянуть лодки в Азии иии…"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "…и я вижу этот HR 382 снова в продаже! Представляете? Конечно, я сразу связываюсь с брокером.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "205.jpg",
                    "..уточняю вопросы, и Алексей уже на следующий день летит на Лангкави (сам я находился в Японии и не мог так сразу уехать)"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Через несколько дней мы оплачиваем лодку и ещё через неделю я снова на ней, я купил HR 382, о котором давно мечтал и жалел, что не купил его полгода назад"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "207.JPG",
                    "он стал на 10000 долларов дороже, также на нем оказалась небольшая царапина на борту, но я решил, что он все равно того стоит!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Зачем я купил эту лодку?"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Целей на самом деле очень много, я хочу создавать качественный контент, я хочу ходить на классной лодке в Японии ииии….",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я хочу в будущем создать новый продукт про большие лодки, про оффшорные переходы, про яхту для кругосветки, а этот HR 382..",
                    "_center"
                )
            );
        },
    },
]
