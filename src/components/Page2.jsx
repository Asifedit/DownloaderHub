import React from "react";
import "../styles/page2.css";
export const Page2 = () => {
    return (
        <div className="page2">
            <div className="topic">Supported</div>
            <div className="boxs">
                <div className="Instagram box">
                        <i class="fa-brands fa-instagram"></i>
                    <p>Instagram</p>
                </div>
                <div className="Facbook box">
                    <i class="fa-brands fa-facebook"></i>
                    <p>Facbook</p>
                </div>
                <div className="TikTok box">
                    <i class="fa-brands fa-tiktok"></i>
                    <p>TikTok</p>
                </div>
                <div className="YouTube box">
                    <i class="fa-brands fa-youtube"></i>
                    <p>YouTube</p>
                </div>
            </div>
        </div>
    );
};
export default Page2