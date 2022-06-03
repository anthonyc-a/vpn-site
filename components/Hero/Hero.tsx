import React, { useEffect } from "react";
import { Hero } from "../styles/Hero/Hero";
import Illustration from "./HeroImg/HeroImg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeroComponent = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".hero-info", {
      opacity: 1,
      duration: 0.6,
      translateY: 0,
    });
  });
  return (
    <Hero className="container" id="about">
      <div className="hero-inner container">
        <div className="hero-info col col-md-6 ">
          <h1>
            Want anything to be easy with <strong>LaslesVPN.</strong>
          </h1>
          <p>
            Provide a network for all your needs with ease and fun using{" "}
            <strong>LaslesVPN</strong> discover interesting features from us.
          </p>
          <button>Get Started</button>
        </div>
        <div className="hero-img">
          <Illustration />
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-img">
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.50001 7.34929C9.45479 7.34929 10.3705 6.97001 11.0456 6.29488C11.7207 5.61975 12.1 4.70407 12.1 3.74929C12.1 2.79451 11.7207 1.87884 11.0456 1.20371C10.3705 0.528577 9.45479 0.149292 8.50001 0.149292C7.54523 0.149292 6.62955 0.528577 5.95442 1.20371C5.27929 1.87884 4.90001 2.79451 4.90001 3.74929C4.90001 4.70407 5.27929 5.61975 5.95442 6.29488C6.62955 6.97001 7.54523 7.34929 8.50001 7.34929ZM3.39866 18.1493C1.57686 18.1493 0.0422473 16.6179 0.739418 14.9347C1.16156 13.9156 1.7803 12.9896 2.56031 12.2096C3.34032 11.4296 4.26633 10.8108 5.28547 10.3887C6.3046 9.96656 7.3969 9.74929 8.50001 9.74929C9.60311 9.74929 10.6954 9.96656 11.7145 10.3887C12.7337 10.8108 13.6597 11.4296 14.4397 12.2096C15.2197 12.9896 15.8385 13.9156 16.2606 14.9347C16.9578 16.6179 15.4232 18.1493 13.6014 18.1493H3.39866Z"
                fill="#F53838"
              />
            </svg>
          </div>
          <div className="stat-info">
            <h3>90+</h3>
            <span>Users</span>
          </div>
        </div>
        <div className="splitter"></div>
        <div className="stat-item">
          <div className="stat-img">
            <svg
              width="14"
              height="21"
              viewBox="0 0 14 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7.54932C14 6.63006 13.8189 5.71981 13.4672 4.87053C13.1154 4.02125 12.5998 3.24958 11.9497 2.59957C11.2997 1.94956 10.5281 1.43394 9.67878 1.08216C8.8295 0.730377 7.91925 0.549316 7 0.549316C6.08075 0.549316 5.17049 0.730377 4.32122 1.08216C3.47194 1.43394 2.70026 1.94956 2.05025 2.59957C1.40024 3.24958 0.884626 4.02125 0.532843 4.87053C0.18106 5.71981 -1.36979e-08 6.63006 0 7.54932C0 8.93632 0.41 10.2263 1.105 11.3143H1.097C3.457 15.0093 7 20.5493 7 20.5493L12.903 11.3143H12.896C13.6164 10.1907 13.9995 8.88406 14 7.54932ZM7 10.5493C6.20435 10.5493 5.44129 10.2332 4.87868 9.67064C4.31607 9.10803 4 8.34497 4 7.54932C4 6.75367 4.31607 5.99061 4.87868 5.428C5.44129 4.86539 6.20435 4.54932 7 4.54932C7.79565 4.54932 8.55871 4.86539 9.12132 5.428C9.68393 5.99061 10 6.75367 10 7.54932C10 8.34497 9.68393 9.10803 9.12132 9.67064C8.55871 10.2332 7.79565 10.5493 7 10.5493Z"
                fill="#F53838"
              />
            </svg>
          </div>
          <div className="stat-info">
            <h3>30+</h3>
            <span>Locations</span>
          </div>
        </div>
        <div className="splitter"></div>
        <div className="stat-item">
          <div className="stat-img">
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 0.549316H2.5C1.96957 0.549316 1.46086 0.76003 1.08579 1.1351C0.710714 1.51018 0.5 2.01888 0.5 2.54932V6.54932C0.5 7.07975 0.710714 7.58846 1.08579 7.96353C1.46086 8.3386 1.96957 8.54932 2.5 8.54932H18.5C19.0304 8.54932 19.5391 8.3386 19.9142 7.96353C20.2893 7.58846 20.5 7.07975 20.5 6.54932V2.54932C20.5 2.01888 20.2893 1.51018 19.9142 1.1351C19.5391 0.76003 19.0304 0.549316 18.5 0.549316ZM13.5 4.54932C13.5 5.1016 13.0523 5.54932 12.5 5.54932C11.9477 5.54932 11.5 5.1016 11.5 4.54932C11.5 3.99703 11.9477 3.54932 12.5 3.54932C13.0523 3.54932 13.5 3.99703 13.5 4.54932ZM17.5 4.54932C17.5 5.1016 17.0523 5.54932 16.5 5.54932C15.9477 5.54932 15.5 5.1016 15.5 4.54932C15.5 3.99703 15.9477 3.54932 16.5 3.54932C17.0523 3.54932 17.5 3.99703 17.5 4.54932ZM18.5 10.5493H2.5C1.96957 10.5493 1.46086 10.76 1.08579 11.1351C0.710714 11.5102 0.5 12.0189 0.5 12.5493V16.5493C0.5 17.0798 0.710714 17.5885 1.08579 17.9635C1.46086 18.3386 1.96957 18.5493 2.5 18.5493H18.5C19.0304 18.5493 19.5391 18.3386 19.9142 17.9635C20.2893 17.5885 20.5 17.0798 20.5 16.5493V12.5493C20.5 12.0189 20.2893 11.5102 19.9142 11.1351C19.5391 10.76 19.0304 10.5493 18.5 10.5493ZM13.5 14.5493C13.5 15.1016 13.0523 15.5493 12.5 15.5493C11.9477 15.5493 11.5 15.1016 11.5 14.5493C11.5 13.997 11.9477 13.5493 12.5 13.5493C13.0523 13.5493 13.5 13.997 13.5 14.5493ZM17.5 14.5493C17.5 15.1016 17.0523 15.5493 16.5 15.5493C15.9477 15.5493 15.5 15.1016 15.5 14.5493C15.5 13.997 15.9477 13.5493 16.5 13.5493C17.0523 13.5493 17.5 13.997 17.5 14.5493Z"
                fill="#F53838"
              />
            </svg>
          </div>
          <div className="stat-info">
            <h3>50+</h3>
            <span>Servers</span>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default HeroComponent;
