import renderStory from "../methods/renderStory";
import React from "react";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "111.jpg",
                    "Когда мы жили на лодке в Тунисе, Алиса предложила написать мне книгу про выбор яхты и наше путешествие",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Знаете что я ей сказал?",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Да, я сказал ей что это какая-то фигня, и я не писатель, я пошел посоветоваться к брату…",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "Обычно брат подобные идеи рубит на корню и отрезвляет меня, но тут случилось наоборот!",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "брат тоже сказал, что это хорошая идея, и она ему нравится, он сказал, что денег, скорее всего, не заработаешь, но людям поможешь",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я решил, что, может, напишу статью об этом и начал составлять список тем, которые хочу рассказать",
                    "_center"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "У меня получился список тем на 8 страниц формата А4, я понял, что это будет длинная статья… а точнее, что надо писать книгу!"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "119.jpg",
                    "я отложил это дело на несколько месяцев, мы поехали в теплую Азию, я решил, что для начала я должен пообщаться и исследовать свою аудиторию",
                    "_top"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "я познакомился с несколькими людьми, которые мечтали о яхте и хотели повторить мой путь, я сказал им, что пишу книгу и могу отвечать на их вопросы",
                    "_center"
                )
            );
        },
    },
]
