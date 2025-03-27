import React, { useState } from "react";
import "./banner-top.scss";

const BannerTop = () => {
  return (
    <div className="banner-top-wrapper">
      <div className="banner-top-background"></div>
      <h1 className="banner-top-title"></h1>
      <div className="banner-top-buttons"></div>
    </div>
  );
};

export default BannerTop;
