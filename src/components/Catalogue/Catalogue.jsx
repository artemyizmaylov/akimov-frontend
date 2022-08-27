import "./Catalogue.css";
import { React, useContext } from "react";
import Item from "../CatalogueItem/CatalogueItem";
import Header from "../Header/Header";
import CatalogueItemMobile from "../CatalogueItemMobile/CatalogueItemMobile";
import WindowContext from "../../context/WindowContext";

export default function Catalogue({ items }) {
  const windowWidth = useContext(WindowContext);

  return (
    <section className="catalogue">
      <Header text="ЮвелирнАя ИкОНОТЕКА" withMenuButton />
      {windowWidth >= 670 ? (
        <ul className="catalogue__items">
          {items.map((item) => (
            <Item key={item.article} item={item} />
          ))}
        </ul>
      ) : (
        <CatalogueItemMobile items={items} />
      )}
    </section>
  );
}
