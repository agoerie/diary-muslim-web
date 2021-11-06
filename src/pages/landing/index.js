import React from "react";

import logo from "./images/logo.png";
import banner from "./images/banner.png";
import buttonAndroid from "./images/button-android.png";
import buttonApple from "./images/button-apple.png";
import buttonSubmit from "./images/button-submit.png";

import "./styles.css";

const landingPage = () => {
  return (
    <div>
      <div className="flex-between">
        <div>
          <img src={logo} alt="" className="logo" />
          <div className="row-title-header">
            <h1 className="title-header"> ios & android </h1>
            <div>
              <p className="description-header">
                Download{" "}
                <span className="span-description-header">Diary muslim</span>{" "}
                app for your <br /> mobile device for the easier access <br />
                to best offers.
              </p>
              <div className="flex">
                <img
                  src={buttonApple}
                  alt=""
                  className="button-link apple-button"
                />
                <img src={buttonAndroid} alt="" className="button-link" />
              </div>
            </div>
          </div>
        </div>
        <img src={banner} alt="" className="banner" />
      </div>
      <div>
        <div className="row-join">
          <h1 className="title-join"> join our mailing list </h1>
          <p className="title-desc-join">
            Get exclusive product offers, opportunities, news and stories
            directly to your inbox.
          </p>
          <div className="row-input-submit">
            <input
              type="text"
              placeholder={"Enter your email"}
              className="email-input"
            />
            <img src={buttonSubmit} alt="" className="button-submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
