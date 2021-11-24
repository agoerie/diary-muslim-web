import React from "react";

import logo from "./images/logo.png";
import banner from "./images/banner.png";
import buttonAndroid from "./images/button-android.png";
import buttonApple from "./images/button-apple.png";
import buttonIg from "./images/button-ig.png";

import "./styles.css";

const landingPage = () => {
  return (
    <div>
      <div className="flex-between">
        <div>
          <img src={logo} alt="" className="logo" />
          <div className="row-title-header">
            <div className="wrapper-caption">
              <span className="title-caption color-green">
                {" "}
                The{" "}
                <span className="caption-big">
                  <b>
                    1 <sup>st</sup>
                  </b>
                </span>{" "}
                Digital Al-Quran application
                <br />
                based on social media
                <br />
                engagement experience{" "}
              </span>
            </div>
            <span className="title-header color-green"> ios & android </span>
            <br />
            <span className="title-version color-green">(BETA VERSION)</span>
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
                <a
                  href="https://play.google.com/store/apps/details?id=com.diarymuslim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={buttonAndroid} alt="" className="button-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src={banner} alt="" className="banner" />
      </div>
      <div className="wrapper-footer flex-between">
        <div className="footer-left">
          <p className="description">
            <span className="span-description-header">DiaryMuslim</span>{" "}
            application, Digital Quran based on
            <br />
            social media experience and features to make it easier to build a
            Muslim
            <br />
            community to remind, motivate, and share life inspiration
            <br />
            based on the Al-Quran
          </p>
          <span className="copy">
            Copyright - 2021 | All Right Reserved | PT Diary Muslim Infomedia
          </span>
        </div>
        <div className="footer-right">
          <img src={buttonIg} alt="" className="button-link" />
        </div>
      </div>
    </div>
  );
};

export default landingPage;
