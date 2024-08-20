import React from "react";
import "../styles/Home.css";
import Logo from "../images/logo.png";
import User from "../images/user.png";
import { useTranslation } from "react-i18next";
import Statue from "../images/Statue.png";
import Girl from "../images/girl.png";
import Watch from "../images/watch.png";
import FooterImg from "../images/footerimg.svg";
import { Link } from "react-router-dom";

const Home = () => {
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
          <li className="inf">{t("latest")}</li>

          <li>
            <Link className="link-site" to="/single">Single</Link>

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

        <ul className="wrapper-about-site">
          <div className="wrapper-one">
            <h2 className="home-h2">{t("lorem")}</h2>
            <p className="home-p">{t("lorem2")}</p>

            <div className="user">
              <img src={User} alt="" />
              <div className="wrapper-user">
                <h4 className="husni">Husni Ramdani</h4>
                <p className="data">{t("data")}</p>
              </div>
            </div>

            <h2 className="home-h2">{t("lorem")}</h2>
            <p className="home-p">{t("lorem2")}</p>
          </div>

          <div className="wrapper-two">
            <img src={Statue} alt="" />
            <h2 className="home-h2 title">{t("lorem")}</h2>
            <p className="home-p text">{t("lorem2")}</p>
            <div className="user two-user">
              <img src={User} alt="" />
              <div className="wrapper-user">
                <h4 className="husni">Husni Ramdani</h4>
                <p className="data">{t("data")}</p>
              </div>
            </div>
          </div>

          <div className="wrapper-there">
            <img src={Girl} alt="" />
            <h5 className="about-h5">{t("lorem")}</h5>
            <h6 className="about-h6">
              By <span className="romandi">Husni Ramdani</span>
            </h6>
            <img className="watch-site" src={Watch} alt="" />
            <h5 className="about-h5">{t("lorem")}</h5>
            <p className="about-lorem-there">{t("lorem3")}</p>

            <h6 className="about-h6">
              By <span className="romandi">Husni Ramdani</span>
            </h6>
          </div>
          <div className="wrapper-four">
            <h2 className="home-h2">{t("lorem")}</h2>
            <p className="about-lorem-there">{t("lorem3")}</p>
            <div className="user two-user">
              <img src={User} alt="" />
              <div className="wrapper-user">
                <h4 className="husni">Husni Ramdani</h4>
                <p className="data">{t("data")}</p>
              </div>
            </div>
            <h2 className="home-h2">{t("lorem")}</h2>
            <p className="about-lorem-there">{t("lorem3")}</p>
            <div className="user two-user">
              <img src={User} alt="" />
              <div className="wrapper-user">
                <h4 className="husni">Husni Ramdani</h4>
                <p className="data">{t("data")}</p>
              </div>
            </div>
          </div>
        </ul>

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

export default Home;
