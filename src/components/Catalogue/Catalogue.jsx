import "./Catalogue.css";
import { React, useContext, useState } from "react";
import Item from "../CatalogueItem/CatalogueItem";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import db from "../../db.json";
import CatalogueItemMobile from "../CatalogueItemMobile/CatalogueItemMobile";
import WindowContext from "../../context/WindowContext";

export default function Catalogue() {
  const [items] = useState(db);
  const windowWidth = useContext(WindowContext);

  return (
    <section className="catalogue">
      <Menu />
      <Header text="ЮвелирнАя ИкОНОТЕКА" />
      {windowWidth > 560 ? (
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
