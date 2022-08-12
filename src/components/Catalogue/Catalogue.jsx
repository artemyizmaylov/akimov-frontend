import './Catalogue.css';
import {
  React, useState,
} from 'react';
import Item from './Item/Item';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import db from '../../db.json';

export default function Catalogue() {
  const [items] = useState(db);

  return (
    <section className="catalogue">
      <Menu />
      <Header text="ЮвелирнАя ИкОНОТЕКА" />
      <ul className="catalogue__items">
        {items.map((item) => (
          <Item
            key={item.article}
            item={item}
          />
        ))}
      </ul>
    </section>
  );
}
