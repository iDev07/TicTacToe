import React, { useEffect } from "react";
import "./About.css";
import aboutImg from "../img/me_zoomed.jpg";
import AOS from "aos";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img
              src={aboutImg}
              alt=""
              data-aos="flip-left"
              className="about__img"
            />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Is it interesting for you ? If so Let's talking about me. I am a
                Junior Frontend Developer. I have a passion for creating
                beautiful and functional web applications. I am a self-motivated
                and self-driven individual. I am a team player who is always
                willing to learn new technologies and languages. My experience
                in the frontend development is 1 year. I have many web sites and
                applications that I have developed.
              </p>
              <p className="about__text p__color">
                I am studying in a lyceum called "S.H.Sirojiddinov" In the
                future I hope to become a full-stack developer.
              </p>

              <div className="about__button d__flex align__items__center">
                <a href="./img/cv.pdf" download="./assets">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
