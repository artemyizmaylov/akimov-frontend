import "./Catalogue.css";
import { React, useContext, useEffect, useState } from "react";
import Item from "../CatalogueItem/CatalogueItem";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import CatalogueItemMobile from "../CatalogueItemMobile/CatalogueItemMobile";
import WindowContext from "../../context/WindowContext";
import { getItems } from "../../utils/api";

export default function Catalogue() {
  const [items, setItems] = useState([]);
  const windowWidth = useContext(WindowContext);

  useEffect(() => {
    getItems().then((data) => {
      localStorage.setItem("items", JSON.stringify(data));
      setItems(data);
    });
  }, []);

  return (
    <section className="catalogue">
      <Menu />
      <Header text="ЮвелирнАя ИкОНОТЕКА" />
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
