import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import AddButton from '../AddButton/AddButton';
import './ItemPopup.css';
import CartContext from '../../context/CartContext';
import MaterialSlider from '../MaterialSlider/MaterialSlider';
import SizeSlider from '../SizeSlider/SizeSlider';

export default function ItemPopup({ item, isOpen, handleClose }) {
  const { addToCart } = useContext(CartContext);
  const [material, setMaterial] = useState('silver');
  const sizes = Object.keys(item.materials[material].size);
  const [size, setSize] = useState(sizes[0]);
  const nav = useNavigate();
  const popup = useRef(null);
  const goldImage = useRef(null);
  const silverImage = useRef(null);

  const handleMaterialChange = () => {
    if (material === 'gold') {
      setMaterial('silver');
    } else {
      setMaterial('gold');
    }
  };

  const handleSizeChange = (evt) => {
    setSize(evt.target.value);
  };

  const handleAddButtonClick = () => {
    const itemCopy = { ...item };

    itemCopy.material = material;
    itemCopy.size = size;
    itemCopy.price = item.materials[material].size[size].prices;
    itemCopy.weight = item.materials[material].size[size].weight;

    delete itemCopy.materials;
    delete itemCopy.description;
    delete itemCopy.gender;

    addToCart(itemCopy);
    nav('/catalogue');
    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(popup.current, {
        opacity: 1,
        display: 'grid',
      });
    } else {
      gsap.to(popup.current, {
        opacity: 0,
        display: 'none',
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (material === 'gold') {
      gsap.to(goldImage.current, {
        opacity: 1,
      });
      gsap.to(silverImage.current, {
        opacity: 0,
      });
    } else {
      gsap.to(goldImage.current, {
        opacity: 0,
      });
      gsap.to(silverImage.current, {
        opacity: 1,
      });
    }
  }, [material]);

  return (
    <div className="item-popup" ref={popup}>
      <button
        className="item-popup__close-button"
        aria-label="Закрыть"
        type="button"
        onClick={handleClose}
      />
      <div className="item-popup__image-container">
        <img className="item-popup__image" src={`./items/${item.article}_gold.png`} alt={item.name} ref={goldImage} />
        <img className="item-popup__image" src={`./items/${item.article}_silver.png`} alt={item.name} ref={silverImage} />
      </div>
      <div className="item-popup__info">
        <div className="item-popup__sliders">
          <div className="item-popup__slider-container">
            <p className="item-popup__slider-text">Выберите исполнение</p>
            <MaterialSlider id="material" value={material} onChange={handleMaterialChange} />
          </div>
          <div className="item-popup__slider-container">
            <p className="item-popup__slider-text">Выберите размер</p>
            <SizeSlider id="size" rageArray={sizes} value={size} onChange={handleSizeChange} />
          </div>
        </div>
        <div className="item-popup__text-container">
          <p className="item-popup__text">{material}</p>
          <p className="item-popup__text">{item.materials[material].gems}</p>
          <p className="item-popup__text">{`${size} MM`}</p>
          <p className="item-popup__text">{`${item.materials[material].size[size].weight} ГР`}</p>
        </div>
      </div>
      <AddButton price={item.materials[material].size[size].prices} text="Добавить" onClick={handleAddButtonClick} />
    </div>
  );
}
