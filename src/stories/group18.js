import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "171.jpg",
                    "мне нравится делать что-то полезное и давать пользу людям, время шло, наступил 2020 год, были события, которые лучше не называть, и я их провел по большей части на Бали"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "172.PNG",
                    " я понимал, что это рано или поздно закончится, и я хотел создать новый продукт, я создал пост, спросил у вас, нужен ли вам..",
                    "_black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Курс “Капитан небольшой яхты”, и получил огромное количество поддержки, поэтому теоретическую часть я начал снимать уже зимой на Бали, а летом.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "..летом мы поехали на лодки, которые стояли в Тунисе и начали писать курс “Капитан небольшой яхты” уже вместе с Алексеем на моей Albin Vega и его Marieholm 32e"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "мы работали с раннего утра и до заката, т.к. тем было очень много, я составил новый план примерно как с книгой и.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "когда мы снимали, мы понимали, что нужно ещё снять это, и то.. какое-то время список наших тем только рос, а не сокращался, несмотря на то, что мы писали каждый день!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "но мы трудились, трудились, и у нас получилось все снять :D"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "все надписи уже в трейлере"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "чуть позже ещё почти год ушел на перевод на 28 языков, но это уже другая история.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "когда мы закончили курс мы пошли нон-стоп в Черногорию, и это был недельный переход, новый опыт, мы шли в 2 яхты"
                )
            );
        },
    },
]
