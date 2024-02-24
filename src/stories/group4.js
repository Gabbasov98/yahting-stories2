import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "31.jpg",
                    "я сразу загорелся и стал расспрашивать, знает ли он что-то про недорогие Шведские лодки"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Гунар сказал, что ничего не знает, но приезжай, разберемся!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Обычно такие предложения оказываются пустыми словами, но в данном случае я ухватился за это, и уже через пару месяцев после всех своих романтических приключений я был в Швеции!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Гунару огромное спасибо за его помощь, он позвал к себе в гости, повозил на машине и после нескольких просмотров мы нашли нашу новую яхту! Сейчас покажу ее",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "35.jpg",
                    "Это Karlskrona Viggen, 7.1 метра в длину, 2.24 метра в ширину, осадка 1.1 метр, подвесной двигатель Johnson 9.9 л.с. Как думаете, сколько стоила?",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "36.JPG",
                    "Karlskrona Viggen под парусом",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "37.JPG",
                    "Поставили спинакер",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "38.jpg",
                    "Так выглядела внутри"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "39.jpg",
                    "Ее звали Happy и мы купили ее за 1200 евро, в цену было включено все, что на лодке, включая двигатель."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "В 2015 мы обновили на ней подушки, покрасили внутри, путешествовали"
                )
            );
        },
    },
]
