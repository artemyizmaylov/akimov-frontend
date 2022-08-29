import "./CatalogueItem.css";
import gsap from "gsap";
import { React, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import MaterialSlider from "../MaterialSlider/MaterialSlider";
import WindowContext from "../../context/WindowContext";

export default function CatalogueItem({ item }) {
  const { addToCart } = useContext(CartContext);
  const [material, setMaterial] = useState(
    item.collection === "воинская" ? "silver" : "gold"
  );
  const startingPrice = Object.values(item.materials[material].size)[0].prices;

  const goldImage = useRef();
  const silverImage = useRef();
  const windowWidth = useContext(WindowContext);

  const handleCartClick = () => {
    const itemCopy = { ...item };

    itemCopy.material = material;
    itemCopy.size = Object.keys(item.materials[material].size)[0];
    itemCopy.price = item.materials[material].size[itemCopy.size].prices;
    itemCopy.weight = item.materials[material].size[itemCopy.size].weight;

    delete itemCopy.materials;
    delete itemCopy.description;
    delete itemCopy.gender;

    addToCart(itemCopy);
  };

  function changeMaterials() {
    const duration = 0.7;
    const ease = "inOut";

    if (material === "gold") {
      gsap.to(goldImage.current, {
        opacity: 0,
        ease,
        duration,
      });
      gsap.to(silverImage.current, {
        opacity: 1,
        ease,
        duration,
      });
      setMaterial("silver");
    } else {
      gsap.to(goldImage.current, {
        opacity: 1,
        ease,
        duration,
      });
      gsap.to(silverImage.current, {
        opacity: 0,
        ease,
        duration,
      });
      setMaterial("gold");
    }
  }

  return (
    <li
      className="item"
      style={{
        gridColumn: `span ${
          item.type === "цепь" && windowWidth >= 768 ? 2 : 1
        }`,
      }}
    >
      <div className="item__images-container">
        <img
          className="item__image item__image_gold"
          style={{
            objectFit:
              item.type === "цепь" && windowWidth < 580 ? "cover" : "contain",
            opacity: item.collection === "воинская" ? "0" : "100%",
          }}
          alt={item.name}
          src={`/items/${item.article}_gold${
            item.type === "цепь" && windowWidth < 580 ? "_m" : ""
          }.webp`}
          ref={goldImage}
        />
        <img
          className="item__image item__image_silver"
          style={{
            objectFit:
              item.type === "цепь" && windowWidth < 580 ? "cover" : "contain",
            opacity: item.collection === "воинская" ? "100%" : "0",
          }}
          alt={item.name}
          src={`/items/${item.article}_silver${
            item.type === "цепь" && windowWidth < 768 ? "_m" : ""
          }.webp`}
          ref={silverImage}
        />
      </div>
      <div className="item__info-container">
        <div className="item__info">
          <p className="item__text_small">
            {item.type[0].toUpperCase() + item.type.slice(1)}
          </p>
          <p
            className={`item__text ${
              item.name.length > 20 && "item__text_small"
            }`}
          >
            {item.name.toUpperCase()}
          </p>
        </div>
        <div className="item__interactive">
          <MaterialSlider
            isChecked={material === "gold" ? false : true}
            onChange={changeMaterials}
            id={item.article}
            vertical
          />
          <div className="item__info">
            <div>
              <p className="item__text_small">
                {material === "gold" ? "золото 585" : "серебро 925"}
              </p>
              <p className="item__text_small">
                {item.materials[material].gems}
              </p>
            </div>
            <p className="item__text">{`${
              Object.keys(item.materials[material].size).length > 1 ? "от" : ""
            } ${startingPrice} Р`}</p>
          </div>
          <button
            className="item__cart"
            type="button"
            aria-label="Добавить"
            onClick={handleCartClick}
          />
        </div>
        <Link
          to={`/details/${item.article}`}
          className="item__text_gold item__text_big"
        >
          ПОДРОБНЕЕ
        </Link>
      </div>
    </li>
  );
}
