import React from "react";
import "./CatalogueItemMobile.css";
import Item from "../CatalogueItem/CatalogueItem";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";

export default function CatalogueItemMobile({ items }) {
  return (
    <Swiper
      modules={[Mousewheel]}
      slidesPerView={1}
      direction="vertical"
      mousewheel={{ sensitivity: 1, thresholdTime: 700 }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.article}>
          <Item item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
