// import logo from './logo.svg';
import React, { Suspense } from "react";
import './App.css';
const StoriesLazy = React.lazy(() => import("react-insta-stories"));
const WithSeeMore = React.lazy(() =>
    import("react-insta-stories").then((module) => ({
      default: module.WithSeeMore,
    }))
);

fix100vh();
window.addEventListener('resize', () => {
    fix100vh();
})
function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

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
  {
    content: ({ action, isPaused }) => {
      return (
          imgStoryRender(
              "https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "Text111 for description .... Text for description"
          )
      );
    },
  },
  {
    content: ({ action, isPaused }) => {
      return (
          imgStoryRender(
              "https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "Text222 for description .... Text for description"
          )
      );
    },
  },
    {
        url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        type: "video",
    },
];

const imgStoryRender = (imgSrc, Text) => {
    return (
        <div className={"story-card"} style={contentStyle}>
            <img
                className={"story-card__img"}
                src={imgSrc}
            ></img>
            <div className="story-card__text">
                <div className="text">
                    {Text}
                </div>
            </div>
        </div>
    )
}

const fullImage = {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    display: "block",
    objectFit: "cover",
};

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333",
};

const contentStyle = {
    background: "#333",
    width: "100%",
    padding: 0,
    color: "white",
    height: "100%",
    position: "relative",
};

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative",
};

export default App;
