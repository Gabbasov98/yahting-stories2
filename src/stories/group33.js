import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Торд выиграл Maxi 68"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "это был интересный опыт!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Но… как я понял из исследований, которые вы помогали мне делать..",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "..я понял, что люди хотят более серьезные яхты",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "маленькая 7-метровая лодка интересна только 10% моих подписчиков",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-86.png",
                    "в среднем людям интересна лодка около 10 метров, с современными навигационными приборами, со штурвалом, с душем и отдельными каютами",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-87.png",
                    "именно такую лодку мы и планируем разыгрывать в следующий раз!",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-88.png",
                    "теперь бюджет следующего приза будет 35 000 евро!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-89.png",
                    "это лодка, которую мы выкладывали несколько месяцев назад, и я взял ее за пример того, что мы хотим видеть призом",
                    "_black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-90.png",
                    "Gib Sea 33, современная и комфортная яхта!"
                )
            );
        },
    },
]
