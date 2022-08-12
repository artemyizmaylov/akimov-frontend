import './Item.css';
import gsap from 'gsap';
import {
  React, useRef, useState, useContext,
} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../context/CartContext';
import MaterialSlider from '../../MaterialSlider/MaterialSlider';
import useWindowWidth from '../../../hooks/useWindowWidth';

export default function Item({ item }) {
  const { addToCart } = useContext(CartContext);
  const [material, setMaterial] = useState('gold');
  const startingPrice = Object.values(item.materials[material].size)[0].prices;

  const goldImage = useRef();
  const silverImage = useRef();
  const windowWidth = useWindowWidth();

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
    const ease = 'inOut';

    if (material === 'gold') {
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
      setMaterial('silver');
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
      setMaterial('gold');
    }
  }

  return (
    <li
      className="item"
      style={{ gridColumn: `span ${(item.type === 'цепь' && windowWidth >= 768) ? 2 : 1}` }}
    >
      <div className="item__images-container">
        <img
          className="item__image item__image_gold"
          alt={item.name}
          src={`/items/${item.article}_gold${item.type === 'цепь' && windowWidth < 768 ? '_m' : ''}.png`}
          ref={goldImage}
        />
        <img
          className="item__image item__image_silver"
          alt={item.name}
          src={`/items/${item.article}_silver${(item.type === 'цепь' && windowWidth < 768) ? '_m' : ''}.png`}
          ref={silverImage}
        />
      </div>
      <div className="item__main-info">
        <p className="item__text_small">
          {item.type[0].toUpperCase() + item.type.slice(1)}
        </p>
        <p className="item__text">{item.name.toUpperCase()}</p>
      </div>
      <div className="item__interactive">
        <MaterialSlider
          value={material}
          onChange={changeMaterials}
          id={item.article}
          vertical
        />
        <div className="item__info">
          <p className="item__text_small">{material === 'gold' ? 'золото 585' : 'серебро 925'}</p>
          <p className="item__text_small">{item.materials[material].gems}</p>
          <p className="item__text item__price">
            {`от ${startingPrice} Р`}
          </p>
        </div>
        <button
          className="item__cart"
          type="button"
          aria-label="Добавить"
          onClick={handleCartClick}
        />
      </div>
      <Link
        to="/details"
        state={{ item }}
        className="item__text_gold item__text_big"
      >
        ПОДРОБНЕЕ
      </Link>
    </li>
  );
}
