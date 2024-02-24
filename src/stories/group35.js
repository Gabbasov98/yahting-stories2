import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Например, палубы бывают пластиковые, а бывают тиковые"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Управление бывает румпельное, а бывает со штурвалом (разные системы, разные автопилоты, разное обслуживание)"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Электрика и сантехника современной лодки сильно отличается от небольшой лодки 70-80х годов"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Разные системы постановки парусов, постановки на якорь, разные системы даже с туалетом!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Раньше я фокусировался только на небольших лодках с простыми системами",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Теперь я дополняю курс, и он будет подходить людям, которые хотят как небольшие лодки, так и современные большие",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-107.png",
                    "Для тех, кто купит мой новый курс или проапгрейдит свой старый курс до нового, я придумал этот приз в виде яхты с бюджетом 35 000 евро!",
                    "_black _small"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "для участия нужно перейти по ссылке, купить курс и заполнить конкурсную анкету, когда она будет доступна! Все подробности есть у меня на сайте!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-109.jpg",
                    "помимо этого, после выпуска курса я буду разыгрывать раз в месяц путешествие со мной на моей Hallberg-Rrassy 382",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-110.jpg",
                    "покупая новый курс, вы участвуете в розыгрыше путешествия каждый месяц после его релиза!",
                    "_top"
                )
            );
        },
    },
]
