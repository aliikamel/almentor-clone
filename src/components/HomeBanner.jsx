import React from "react";

function HomeBanner() {
    return (
        <div className="home-banner">
            <div className="banner-content">
                <h1>Learn Online</h1>
                <p className="p1">From the biggest Arabic library of video-based courses</p>
                <p className="p2">Only for 7.5 USD /month</p>
                <p className="p3">Billed Yearly</p>
                <button className="btn banner-btn red-btn">Subscribe Now</button>
            </div>
            <div className="banner-img-container">
                <img className="banner-img" src="https://www.almentor.net/anonymous-home-banner-dark.9dbac7d38623a1edf8ec.png" alt="" />
            </div>
        </div>
    )
}

export default HomeBanner