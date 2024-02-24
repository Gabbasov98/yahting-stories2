// import logo from './logo.svg';
import React, { Suspense } from "react";
import './App.css';
import group1 from "./stories/group1";
import group2 from "./stories/group2";
import group3 from "./stories/group3";
import group4 from "./stories/group4";
import group5 from "./stories/group5";
import group6 from "./stories/group6";
import group7 from "./stories/group7";
import group8 from "./stories/group8";
import group9 from "./stories/group9";
import group10 from "./stories/group10";
import group11 from "./stories/group11";
import group12 from "./stories/group12";
import group13 from "./stories/group13";
import group14 from "./stories/group14";
import group15 from "./stories/group15";
import group16 from "./stories/group16";
import group17 from "./stories/group17";
import group18 from "./stories/group18";
import group19 from "./stories/group19";
import group20 from "./stories/group20";
import group21 from "./stories/group21";
import group22 from "./stories/group22";
import group23 from "./stories/group23";
import group24 from "./stories/group24";
import group25 from "./stories/group25";
import group26 from "./stories/group26";
import group27 from "./stories/group27";
import group28 from "./stories/group28";
import group29 from "./stories/group29";
import group30 from "./stories/group30";
import group31 from "./stories/group31";
import group32 from "./stories/group32";
import group33 from "./stories/group33";
import group34 from "./stories/group34";
import group35 from "./stories/group35";
import group36 from "./stories/group36";
import renderStory from "./methods/renderStory";


const StoriesLazy = React.lazy(() => import("react-insta-stories"));
const WithSeeMore = React.lazy(() =>
    import("react-insta-stories").then((module) => ({
        default: module.WithSeeMore,
    }))
);


function App() {
    return (
        <div className="App">
            <div className="stories-modal">
                <div className="stories-modal__bg"></div>
                <button className="stories-modal__close _hide-stories">
                    <svg fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor"
                                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
                        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                    </svg>
                </button>
                <div className="stories-modal__dialog">
                    <div className="stories">
                        <Suspense>
                            <StoriesLazy
                                preloadCount={3}
                                loop
                                keyboardNavigation
                                defaultInterval={8000}
                                stories={stories2}
                                onStoryEnd={(s, st) => console.log("story ended", s, st)}
                                onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
                                onStoryStart={(s, st) => console.log("story started", s, st)}
                                onNext={() => console.log("next button pressed")}
                                onPrevious={() => console.log("previous button pressed")}
                                storyContainerStyles={{ borderRadius: 8, overflow: "hidden", width: "100%" }}
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}


const stories2 = [
    ...group1,
    ...group2,
    ...group3,
    ...group4,
    ...group5,
    ...group6,
    ...group7,
    ...group8,
    ...group9,
    ...group10,
    ...group11,
    ...group12,
    ...group13,
    ...group14,
    ...group15,
    ...group16,
    ...group17,
    ...group18,
    ...group19,
    ...group20,
    ...group21,
    ...group22,
    ...group23,
    ...group24,
    ...group25,
    ...group26,
    ...group27,
    ...group28,
    ...group29,
    ...group30,
    ...group31,
    ...group32,
    ...group33,
    ...group34,
    ...group35,
    ...group36,
];

export default App;


fix100vh();
window.addEventListener('resize', () => {
    fix100vh();
})
function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
