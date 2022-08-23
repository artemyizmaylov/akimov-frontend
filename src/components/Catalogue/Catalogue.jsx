import "./Catalogue.css";
import { React, useContext, useEffect, useState } from "react";
import Item from "../CatalogueItem/CatalogueItem";
import Menu from "../Menu/Menu";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import CatalogueItemMobile from "../CatalogueItemMobile/CatalogueItemMobile";
import WindowContext from "../../context/WindowContext";
import { getItems } from "../../utils/api";

export default function Catalogue() {
  const windowWidth = useContext(WindowContext);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [lastFilter, setLastFilter] = useState({ id: "", pressCount: 0 });

  const search = (id) => {
    switch (id) {
      case "male":
        setFilteredItems(items.filter((item) => item.gender === "m"));
        break;
      case "female":
        setFilteredItems(items.filter((item) => item.gender === "f"));
        break;
      case "cross":
        setFilteredItems(items.filter((item) => item.type === "крест"));
        break;
      case "images":
        setFilteredItems(items.filter((item) => item.type === "образок"));
        break;
      case "rings":
        setFilteredItems(items.filter((item) => item.type === "кольцо"));
        break;
      case "earrings":
        setFilteredItems(items.filter((item) => item.type === "серьги"));
        break;
      case "foldings":
        setFilteredItems(items.filter((item) => item.type === "складень"));
        break;
      case "chains":
        setFilteredItems(items.filter((item) => item.type === "цепь"));
        break;
    }
  };

  const filterItems = (evt) => {
    const { id, classList } = evt.target;

    if (lastFilter.id && id !== lastFilter.id) {
      document
        .querySelector(`#${lastFilter.id}`)
        .classList.remove("menu__link_active");
    }

    classList.toggle("menu__link_active");

    if (lastFilter.id === id) {
      setLastFilter({ id, pressCount: lastFilter.pressCount + 1 });

      if (lastFilter.pressCount % 2 === 1) {
        setFilteredItems(items);
        return;
      }
      search(id);
    } else {
      search(id);
      setLastFilter({ id, pressCount: 1 });
    }
  };

  useEffect(() => {
    getItems().then((data) => {
      localStorage.setItem("items", JSON.stringify(data));
      setItems(data);
      setFilteredItems(data);
    });
  }, []);

  return (
    <section className="catalogue">
      <Menu>
        <Filter handle={filterItems} />
      </Menu>
      <Header text="ЮвелирнАя ИкОНОТЕКА" />
      {windowWidth >= 670 ? (
        <ul className="catalogue__items">
          {filteredItems.map((item) => (
            <Item key={item.article} item={item} />
          ))}
        </ul>
      ) : (
        <CatalogueItemMobile items={filteredItems} />
      )}
    </section>
  );
}
