import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Почему все так затянулось?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Во-первых, мы добавляли и добавляли новые работы",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-23.jpeg",
                    "Во-вторых, процесс был не оптимизирован, подрядчиками не заказывались вовремя необходимые запчасти"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-24.jpeg",
                    "иногда проходили недели в ожидании каких-то запчастей",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "в-третьих, Джефри очень хороший специалист, но у него проблемы с менеджементом",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "его рабочие довольно часто залипали в телефон",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-27.jpeg",
                    "работа в климате Малайзии под навесом — это адское пекло, и работать очень тяжело"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "позже выяснится, что другие рабочие работают сильно хуже, и мы часто вспоминаем Джефри с хорошими мыслями",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-29.jpeg",
                    "Джефри делает хорошо, но на сроки рассчитывать не стоит, нужно смотреть трезво на ситуацию"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2024-30.jpeg",
                    "покраска лодки и работа с деревом была выполнена на 9 из 10"
                )
            );
        },
    },
]
