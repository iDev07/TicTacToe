import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "../img/new_logo.png";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import MobileNav from "../components/MobileNav/MobileNav";
// import { useEffect } from "react/cjs/react.development";
import AOS from "aos";
function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const { t } = useTranslation();
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  // Toogle Menu
  const [show, setShow] = useState(true);
  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navigation pxy__30 ml-auto">
            <div className="select">
              <select name="lang" value={lang} onChange={handleChange}>
                <option value="en">EN</option>
                <option value="uz">UZ</option>
              </select>
            </div>
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">{t("navbar1")}</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">{t("navbar2")}</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">{t("navbar3")}</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">{t("navbar4")}</li>
              </a>

              <a href="#Contact">
                <li className="nav__items mx__15">{t("navbar5")}</li>
              </a>
            </ul>
          </div>
        </div>
        <MobileNav />
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10" data-aos="fade-down">
                WELCOME TO MY UNUSUAL WORLD :)
              </h1>
              <h2 className="home__text pz__10" data-aos="fade-left">
                Hi, I’m Diyor
              </h2>
              <h3 className="home__text sweet pz__10">Frontend Developer</h3>
              <h4 className="home__text pz__10">based in Uzbekistan.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
