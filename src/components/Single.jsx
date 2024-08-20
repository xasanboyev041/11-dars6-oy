import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../images/logo.png";
import FooterImg from "../images/footerimg.svg";
import User from "../images/user.png";
import Points from "../images/points.png";
import Statue from "../images/statue.png";

const Single = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <div className="container">
        <ul className="header-home">
          <li>
            <img src={Logo} alt="About logo site" />
          </li>

          <li>
            <select
              className="language-select"
              defaultValue={i18n.language}
              onChange={handleChangeLanguage}
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </li>
        </ul>

        <div className="wrapper-single-page">
          <h1 className="blog-site">{t("blog")}</h1>
          <div className="user home ">
            <img src={User} alt="" />
            <div className="wrapper-user">
              <h4 className="romandi">Husni Ramdani</h4>
              <p className="data">{t("data")}</p>
            </div>
          </div>
          <img className="point" src={Points} alt="" />
          <img className="img-statue" src={Statue} alt="" />
          <p className="lorem4">{t("lorem4")}</p>
        </div>

        <footer>
          <img src={FooterImg} alt="" />
          <p className="about-email">gblog@gmail.com</p>
          <div className="icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-github"></i>
            <i class="fa-brands fa-figma"></i>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Single;
