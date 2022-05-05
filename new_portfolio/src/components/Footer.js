import React from "react";
import footerImg from "../img/new_logo.png";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img
        src={footerImg}
        alt="Footer Logo"
        style={{
          width: "140px",
          height: "55px",
        }}
        className="footer__img pointer"
      />
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2022 programmer Diyor. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
