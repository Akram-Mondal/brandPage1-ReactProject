import React from "react";

const HeroSection = () => {
  return (
    <div className="heroSction">
      <div className="heroLeft">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero_btn">
        <button >Shop Now</button>
        <button className="secondarybtn">Category</button>
        </div>
        <div className="shopping">
        <p>Also Available On</p>
        <div className="shopping_icon">
            <img src="./image/flipkart.png" alt="flipkart_logo" />
            <img src="./image/amazon.png" alt="flipkart_logo" />
        </div>
        </div>
      </div>

      <div className="heroImage">
        <img src="./image/shoe_image.png" alt="shoe_image" />
      </div>
    </div>
  );
};

export default HeroSection;
