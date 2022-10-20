import "./Catalogue.css";
import { React, useContext, useEffect, useRef } from "react";
import Item from "../CatalogueItem/CatalogueItem";
import Header from "../Header/Header";
import CatalogueItemMobile from "../CatalogueItemMobile/CatalogueItemMobile";
import WindowContext from "../../context/WindowContext";

export default function Catalogue({ items, savedSlide, setSavedSlide }) {
  const windowWidth = useContext(WindowContext);
  const breakpoint = 1024;
  const catalogueItems = useRef();

  const onPageScroll = (e) => {
    setTimeout(() => {
      sessionStorage.setItem("latestItemsPos", e.target.scrollTop);
    }, 500);
  };

  useEffect(() => {
    const element = catalogueItems.current;

    if (element) {
      const latestPos = sessionStorage.getItem("latestItemsPos");
      element.scrollTo(0, latestPos);
      element.addEventListener("scroll", onPageScroll);
    }

    return () => element && element.removeEventListener("scroll", onPageScroll);
  }, []);

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
        <ul className="catalogue__items" ref={catalogueItems}>
          {items.map((item) => (
            <Item key={item.article} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
