import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./About.css";
import gsap from "gsap";

import magi from "../../images/about/magi.png";
import textImage from "../../images/about/with-text-img.png";
import product from "../../images/about/product.png";
import star from "../../images/about/star.svg";
import arrow from "../../images/about/femail-cross-arrow.svg";
import annunciation from "../../images/about/annunciation.png";

import amethyst from "../../images/about/amethyst.png";
import aquamarine from "../../images/about/aquamarine.png";
import diamond from "../../images/about/diamond.png";
import ruby from "../../images/about/ruby.png";
import emerald from "../../images/about/emerald.png";
import bronze from "../../images/about/bronze.png";
import gold from "../../images/about/gold.png";
import silver from "../../images/about/silver.png";

import Header from "../Header/Header";

export default function About() {
  const [material, setMaterial] = useState("silver");
  const [gems, setGems] = useState("emeralds");
  const footerHeading = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    gsap.to(footerHeading.current, {
      duration: 70,
      ease: "none",
      repeat: -1,
      x: "-100%",
    });
  });

  return (
    <div className="about animate-bg">
      <Header withMenuButton />
      <div className="about__container">
        <section className="about__section">
          <h2 className="about__heading">О КОЛЛЕКЦИИ</h2>
          <img
            className="magi-image"
            src={magi}
            alt='Картина "Подношение Волхвов"'
          />
          <p className="about__text">
            Коллекции иконотеки &laquo;Дары волхвов&raquo; созданы
            в&nbsp;компании художника-ювелира Сергея Акимова, известного своим
            новаторством и изобретательством в&nbsp;области ювелирных
            технологий, канонической строгостью в&nbsp;выборе художественной
            тематики. В&nbsp;конце 90-х он&nbsp;буквально перевернул ювелирный
            рынок, начав отливать православные кресты, образки и&nbsp;кольца
            с&nbsp;неизвестной до&nbsp;этого точностью воспроизведения сложных
            рельефов.
          </p>
          <p className="about__text">
            Иконотека &laquo;Дары волхвов&raquo;&nbsp;&mdash; его новый проект,
            в&nbsp;котором Акимов снова меняет представление о&nbsp;качестве
            в&nbsp;искусстве ювелирного литья.
          </p>
          <img
            className="image-with-text"
            src={textImage}
            alt="Золото Волхвов"
          />
          <p className="about__text">
            Взяв за&nbsp;образец золото волхвов, дошедшее до&nbsp;наших дней
            в&nbsp;виде ажурных пустотелых подвесок, Сергей Акимов продолжил
            древнюю историю царственных подарков, где главной художественной
            темой была красота драгоценного металла.
          </p>
        </section>

        <div className="about__history-heading">
          <h2 className="about__heading history-heading">НЕМНОГО ИСТОРИИ</h2>
          <div className="history-heading-image" />
          <h2 className="about__heading history-heading history-heading_reverse">
            НЕМНОГО ИСТОРИИ
          </h2>
        </div>

        <section className="about__section">
          <p className="about__text">
            В&nbsp;XVIII веке в&nbsp;центр ювелирного искусства был поставлен
            драгоценный камень, а&nbsp;металл превращен в&nbsp;его обрамление.
            В&nbsp;своем новом проекте &laquo;Дары волхвов&raquo; Акимов
            возвращает на&nbsp;ювелирный Олимп эстетику драгоценного металла.
            Как во&nbsp;времена Бенвенутто Челлини&nbsp;драгоценные камни
            и&nbsp;эмали оттеняют в&nbsp;изделиях его пластику, чистоту
            и&nbsp;мягкость текучих линий, игру бликов на&nbsp;полированной
            форме. Главенствующие роли отведены сложным ажурным орнаментам,
            миниатюрным скульптурам, вязи священных текстов. Продуманы
            тактильные свойства богатых текстур, тепло и&nbsp;роскошь
            благородной палитры оттенков золотого и&nbsp;серебряного.
          </p>
          <div className="femail-cross">
            <img
              className="femail-cross__image"
              src={product}
              alt="Наперстный крест"
            />
            <div className="about__circle femail-cross__circle" />
            <div className="femail-cross__heading-container">
              <h3 className="femail-cross__heading">
                Женский нАперстный крест
              </h3>
              <img className="femail-cross__arrow" src={arrow} alt="" />
            </div>
            <p className="femail-cross__text about__text about__text_small">
              На Руси по праздникам женщины и девушки надевали поверх одежды
              большие кресты, богато украшенные орнаментом. Наперстный крест был
              частью драгоценного женского убора, по которому определяли
              достаток семьи и ее положение в обществе.
            </p>
          </div>
          <p className="about__text about__text_small">
            Все произведения иконотеки Дары волхвов глубоко символичны, в самом
            древнем значении слова символ соединение мира духовного и
            материального. Это определяется не только темой и сюжетом. Каждое
            ювелирное произведение иконотеки Даров волхвов создано как хора.
          </p>
        </section>

        <section className="about__section">
          <h1 className="about__heading about__heading_big">ХОРА</h1>
          <img className="star-icon" src={star} alt="" />
          <p className="about__text">
            Внутри изделий намеренно оставлено небольшое пространство,
            огороженное орнаментом, иконами святых и&nbsp;молитвами. Это
            и&nbsp;есть хора&nbsp;&mdash; таинственное место, в&nbsp;котором
            собираются и&nbsp;сохраняются лучи Божественной благодати
            и&nbsp;происходит встреча двух миров, духовного
            и&nbsp;материального.
          </p>
          <div className="about__description">
            <img
              className="annunciation-image"
              src={annunciation}
              alt="Картина Благовещение"
            />
            <p className="about__text about__text_small">
              (Византия. Икона “Благовещение”)
            </p>
          </div>
          <p className="about__text">
            Хорами&nbsp;древние называли Богородицу, православные храмы,
            церковные сосуды&hellip; После освящения изделия ювелирной иконотеки
            тоже становятся хорами. Словно священные сосуды они наполняются
            благодатью, превращаются в&nbsp;реликварии для духовных частиц
            Божественной Вечности.
          </p>
        </section>

        <div className="heading-with-line relative">
          <div className="line line_left" />
          <div className="line line_right" />
          <h2 className="about__heading">ПРЕОБРАЖЕНИЕ</h2>
        </div>

        <section className="about__section ">
          <div className="about__description">
            <p className="about__text about__text_small">образок</p>
            <p className="about__text">Казанская икона Божией Матери</p>
          </div>

          <div className="about__product-image-container">
            <img
              className="about__product-image"
              src={`/about/product-${material}.png`}
              alt=""
            />
            <img
              className="about__gems-image"
              src={`/about/${gems}.png`}
              alt=""
            />
            <div className="about__circle product__circle" />
          </div>

          <ul className="about__materials-container">
            <ul className="about__materials">
              <li className="about__material">
                <button
                  className="about__material-button"
                  type="button"
                  onClick={() => setGems("diamonds")}
                >
                  <img className="about__meterial-image" src={diamond} alt="" />
                </button>
              </li>
              <li className="about__material">
                <button
                  className="about__material-button"
                  type="button"
                  onClick={() => setGems("aquamarines")}
                >
                  <img
                    className="about__meterial-image"
                    src={aquamarine}
                    alt=""
                  />
                </button>
              </li>
              <li className="about__material">
                <button
                  className="about__material-button"
                  type="button"
                  onClick={() => setGems("rubies")}
                >
                  <img className="about__meterial-image" src={ruby} alt="" />
                </button>
              </li>
              <li className="about__material">
                <button
                  className="about__material-button"
                  type="button"
                  onClick={() => setGems("emeralds")}
                >
                  <img className="about__meterial-image" src={emerald} alt="" />
                </button>
              </li>
              <li className="about__material">
                <button
                  className="about__material-button"
                  type="button"
                  onClick={() => setGems("amethysts")}
                >
                  <img
                    className="about__meterial-image"
                    src={amethyst}
                    alt=""
                  />
                </button>
              </li>
            </ul>
            <ul className="about__materials">
              <li className="about__material">
                <button
                  className="about__material-button"
                  type="button"
                  onClick={() => setMaterial("bronze")}
                >
                  <img className="about__meterial-image" src={bronze} alt="" />
                </button>
              </li>
              <li className="about__material">
                <button
                  className="about__material-button"
                  type="button"
                  onClick={() => setMaterial("gold")}
                >
                  <img className="about__meterial-image" src={gold} alt="" />
                </button>
              </li>
              <li className="about__material">
                <button
                  className="about__material-button"
                  type="button"
                  onClick={() => setMaterial("silver")}
                >
                  <img className="about__meterial-image" src={silver} alt="" />
                </button>
              </li>
            </ul>
          </ul>

          <p className="about__text">
            Все&nbsp;изделия&nbsp;коллекций,&nbsp;представленных в иконотеке
            Дары волхвов, можно преобразить с учетом своих желаний: выбрать
            металл, камни; во многих моделях предусмотрена возможность замены
            икон на образы любимых святых.
          </p>
        </section>

        <div className="link-to-catalogue" onClick={() => nav("/catalogue")}>
          <p className="link-to-catalogue__text">в икОнОтеку</p>
          <Link className="circle-button" to="/catalogue" />
        </div>
        <footer className="footer">
          <div className="footer__heading">
            <p
              className="footer__heading-text about__heading"
              ref={footerHeading}
            >
              Яко исчезает дым, да исчезнут; яко тает воск от лица огня, тако да
              погибнут беси от лица любящих Бога и знаменующихся крестным
              знамением, и в веселии глаголющих: радуйся.
            </p>
          </div>
          <ul className="footer__contacts">
            <li className="footer__contact">
              <p>gifts@magi.com</p>
            </li>
            <li className="footer__contact">
              <p>8 812 222-20-22</p>
            </li>
          </ul>
          <p className="footer__text">
            © 2022 — 2023 ООО «Дары волхвов» Православная ювелирная компания.
            Все права защищены. Юридический адрес: 199106, г. Санкт-Петербург,
            19 линия В.О., д. 32, корп. 6, лит. Л Копирование материалов данного
            сайта - только с разрешения правообладателя.
          </p>
        </footer>
      </div>
    </div>
  );
}
