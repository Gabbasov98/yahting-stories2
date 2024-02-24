import renderStory from "../methods/renderStory";

export default [
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.videoStoryRender(
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    "Друзья, сейчас покажу немного своей жизни "
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "2.jpg",
                    "2011 год, мне очень хочется ходить под парусом, я провел 1 день на яхте и всерьез задумался о покупке, но денег нет :("
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "3.jpg",
                    "2012 год, мне 20 лет, в моем небольшом бизнесе пошли первые успехи, и я смог выделить 3000 евро на покупку новенького парусного катамарана"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "4.jpg",
                    "летом 2012 года я почти все время проводил под парусом, многому научился, но.."
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "5.jpg",
                    "…но я понял что все-таки хочу яхту на которой можно пойти далеко и надолго, хочу каюту, хочу заваривать чаек во время дождя, а не мокнуть!",
                    "_top",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "6.jpg",
                    "Хочу настоящий и серьезный корабль!",
                    "_top",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.textStoryRender(
                    "На самом деле я изучал информацию о покупке яхты в Швеции где-то с 2009 года, и катамаран я решил покупать, т.к. не был готов к обслуживанию яхты и не понимал, куда ее ставить.",
                    "_center",
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "8.jpg",
                    "в 2013 году я продаю катамаран за те же 3000 евро, и в 2014 году планирую ехать в Швецию за яхтой"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "9.png",
                    "в моем кармане примерно 5000 евро, а у меня большое желание купить яхту и ходить на ней в северной Европе и возможно дойти до Амстердама!",
                    "_black"
                )
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                renderStory.imgStoryRender(
                    "10.png",
                    " читаю форумы, изучаю карты, мечтаю о яхте, провожу по несколько часов в день в ресерчах",
                    "_black"
                )
            );
        },
    },
]
