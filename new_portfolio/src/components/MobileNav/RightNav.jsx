import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Ul = styled.ul`
  display: none;
  list-style: none;
  flex-flow: row nowrap;
  z-index: 9999;
  li {
    padding: 25px 10px;
    font-size: 20px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    display: flex;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      text-align: center;
    }
  }
`;
const RightNav = ({ open }) => {
  const { t } = useTranslation();
  return (
    <Ul open={open}>
      <li>
        <a href="#Home">{t("navbar1")}</a>
      </li>
      <li>
        <a href="#About">{t("navbar2")}</a>
      </li>
      <li>
        <a href="#Services ">{t("navbar3")}</a>
      </li>
      <li>
        <a href="#Portfolio">{t("navbar4")}</a>
      </li>
      <li>
        <a href="#Contact">{t("navbar5")}</a>
      </li>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com/diyorbek.kadirkulov.7">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/diyor_r1ch">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://t.me/l_developer">
              <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCdMGDShGgriZfRfvA2jb_iQ">
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </Ul>
  );
};

export default RightNav;
