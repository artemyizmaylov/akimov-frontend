import React from "react";
import "./CatalogueItemMobile.css";
import Item from "../CatalogueItem/CatalogueItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CatalogueItemMobile({ items }) {
  return (
    <Swiper slidesPerView={1} direction="vertical">
      {items.map((item) => (
        <SwiperSlide key={item.article}>
          <Item item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
