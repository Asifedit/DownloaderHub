import React, { useState } from "react";
import axios from "axios";
import "../styles/page1.css";
import Info from "./Info";

const Page1 = () => {
    const [inputValue, setInputValue] = useState("");
    const [apiResponse, setApiResponse] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async () => {
        if (inputValue) {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://social-media-video-downloader.p.rapidapi.com/smvd/get/all",
                    {
                        params: {
                            url: inputValue,
                            filename: "Test video",
                        },
                        headers: {
                            "X-RapidAPI-Key":
                                "86fddece5fmshd726daacaa177adp19c4afjsne0b99402ad9c",
                            "X-RapidAPI-Host":
                                "social-media-video-downloader.p.rapidapi.com",
                        },
                    }
                );
                setApiResponse(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        } else {
            console.log("noval");
        }
    };

    return (
        <div className="page1">
            <div className="para">
                I'm here to help you downloading videos, Just send the link!
            </div>
            <div className="INPUT">
                <input
                    type="url"
                    placeholder="Enter Your link ..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    className={`dw-btn ${inputValue ? "input-filled" : ""}`}
                    onClick={handleButtonClick}
                >
                    <i
                        className={`fa-solid fa-download ${
                            inputValue ? "fa-bounce" : ""
                        }`}
                    ></i>
                </button>
            </div>
            {isLoading && (
                <h1 class="loader">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </h1>
            )}
            {!isLoading && apiResponse && (
                <Info className="video" data={apiResponse} />
            )}
        </div>
    );
};

export default Page1;
