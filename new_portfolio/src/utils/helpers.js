import React from "react";

import style from "./helpers.module.scss";

export const Projects = ({ type, title, img, link }) => {
  return (
    <div className="col__3">
      <div className="project__box pointer relative">
        <div className="project__box__img pointer relative">
          <div className="project__img__box">
            <img src={img} alt="Project One" className="project__img" />
          </div>
          <div className="mask__effect"></div>
        </div>
        <div className="project__meta absolute">
          <h5 className="project__text">{type}</h5>
          <h4 className="project__text">{title}</h4>
          <a href={link} className="project__btn">
            View website
          </a>
        </div>
      </div>
    </div>
  );
};
