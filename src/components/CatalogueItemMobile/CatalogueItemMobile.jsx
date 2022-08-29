import React, { useEffect, useState } from "react";
import "./CatalogueItemMobile.css";
import Item from "../CatalogueItem/CatalogueItem";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";

export default function CatalogueItemMobile({
  items,
  savedSlide,
  setSavedSlide,
}) {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(savedSlide);
    }
  }, [swiper, savedSlide]);

  return (
    <Swiper
      onSwiper={(e) => setSwiper(e)}
      onSlideChange={(e) => {
        sessionStorage.setItem("savedSlide", e.activeIndex);
        setSavedSlide(e.activeIndex);
      }}
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
