import React, { useEffect, useRef } from "react";
import MyComponent from "./components/Nav";
import "./styles/App.css";
import Page1 from "./components/page1";
import  Page2  from "./components/Page2";
import End from "./components/End.jsx";
const App = () => {
    const mainDivRef = useRef(null);

    useEffect(() => {
        const mainDiv = mainDivRef.current;
        if (mainDiv) {
            const targetElement = mainDiv.querySelector(".target");
            if (targetElement) {
                const targetClasses = Array.from(
                    targetElement.classList
                ).filter((className) => className !== "target");
                setMainDivClass(targetClasses.join(" "));
            }
        }
    }, [""]);

    return (
        <>
            <MyComponent />
            <Page1 />
            <Page2 />
            <End />
        </>
    );
};

export default App;
