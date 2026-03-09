import React from "react";

import logo from "./images/logo.png";
import banner from "./images/banner.png";
import buttonAndroid from "./images/button-android.png";
import buttonApple from "./images/button-apple.png";
import buttonIg from "./images/button-ig.png";

import "./styles.css";

const landingPage = () => {
  return (
    <div className="landing-page">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="noise-layer" />

      <main className="hero-shell">
        <section className="hero-content">
          <img src={logo} alt="Diary Muslim logo" className="logo" />
          <p className="kicker color-green">read listen and share love everyday</p>

          <h1 className="title-caption color-green">
            The <span className="caption-big">1st</span> Digital Al-Quran application based on
            social media engagement experience
          </h1>

          <h2 className="title-header color-green">ios & android</h2>
          <span className="title-version color-green">Beta Version</span>

          <p className="description-header">
            Download <span className="span-description-header">Diary muslim</span> app for your
            mobile device for easier access to best offers.
          </p>

          <div className="store-row">
            <a
              href="https://apps.apple.com/id/app/diary-muslim/id1611557968"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={buttonApple} alt="Download on the Apple App Store" className="button-link" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.diarymuslim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={buttonAndroid} alt="Get it on Google Play" className="button-link" />
            </a>
          </div>
        </section>

        <section className="hero-visual">
          <div className="visual-card">
            <img src={banner} alt="Diary Muslim app preview" className="banner" />
          </div>
        </section>
      </main>

      <footer className="wrapper-footer">
        <div className="footer-left">
          <p className="description">
            <span className="span-description-header">DiaryMuslim</span> application is a Digital
            Quran experience with social features to build a Muslim community that can remind,
            motivate, and share life inspiration based on the Al-Quran.
          </p>
          <span className="copy">
            Copyright - 2021 | All Right Reserved | PT Diary Muslim Infomedia
          </span>
        </div>
        <div className="footer-right">
          <a
            href="https://www.instagram.com/diarymuslim.official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={buttonIg} alt="Diary Muslim Instagram" className="button-link" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default landingPage;
