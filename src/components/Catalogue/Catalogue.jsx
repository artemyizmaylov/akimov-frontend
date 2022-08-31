import "./Catalogue.css";
import { React, useContext } from "react";
import Item from "../CatalogueItem/CatalogueItem";
import Header from "../Header/Header";
import CatalogueItemMobile from "../CatalogueItemMobile/CatalogueItemMobile";
import WindowContext from "../../context/WindowContext";

export default function Catalogue({ items, savedSlide, setSavedSlide }) {
  const windowWidth = useContext(WindowContext);
  const breakpoint = 670;

  return (
    <section className="catalogue">
      <Header
        text="ЮвелирнАя ИкОНОТЕКА"
        withMenuButton={windowWidth < breakpoint ? true : false}
      />
      {windowWidth < breakpoint ? (
        <CatalogueItemMobile
          items={items}
          savedSlide={savedSlide}
          setSavedSlide={setSavedSlide}
        />
      ) : (
        <ul className="catalogue__items">
          {items.map((item) => (
            <Item key={item.article} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
