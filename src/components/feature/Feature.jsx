
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';

import './Feature.css';

// import required modules
import { Pagination } from 'swiper/modules';
import "./Feature.css";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
function Feature() {
  return (
    <>
      <div className="features">
        <div className="container">
          <h1>Featured Products</h1>
          <div className="featu_cards">

          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>  <div className="featu_card">
              <div className="fatu_imgs">
                <img src="/imgs/Image.png" alt="" />
                <div className="featu_icons">
                  <FaRegHeart className="hearts" />
                </div>
              </div>
              <div className="chair">
                <div className="chair_text">
                  <p>Library Stool Chair</p>
                  <span>$20 $39</span>
                </div>
                <LuShoppingCart className="chair_cart"/>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="featu_card">
              <div className="fatu_imgs">
                <img src="/imgs/Image (1).png" alt="" />
                <div className="featu_icons">
                  <FaRegHeart className="hearts" />
                </div>
              </div>
              <div className="chair">
                <div className="chair_text">
                  <p>Library Stool Chair</p>
                  <span>$20 $39</span>
                </div>
                <LuShoppingCart className="chair_cart"/>
              </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="featu_card">
              <div className="fatu_imgs">
                <img src="/imgs/Image (2).png" alt="" />
                <div className="featu_icons">
                  <FaRegHeart className="hearts" />
                </div>
              </div>
              <div className="chair">
                <div className="chair_text">
                  <p>Library Stool Chair</p>
                  <span>$20 $39</span>
                </div>
                <LuShoppingCart className="chair_cart"/>
              </div>
            </div></SwiperSlide>
        <SwiperSlide>
            <div className="featu_card">
              <div className="fatu_imgs">
                <img src="/imgs/Image (3).png" alt="" />
                <div className="featu_icons">
                  <FaRegHeart className="hearts" />
                </div>
              </div>
              <div className="chair">
                <div className="chair_text">
                  <p>Library Stool Chair</p>
                  <span>$20 $39</span>
                </div>
                <LuShoppingCart className="chair_cart"/>
              </div>
            </div></SwiperSlide>
            <SwiperSlide>  <div className="featu_card">
              <div className="fatu_imgs">
                <img src="/imgs/Image.png" alt="" />
                <div className="featu_icons">
                  <FaRegHeart className="hearts" />
                </div>
              </div>
              <div className="chair">
                <div className="chair_text">
                  <p>Library Stool Chair</p>
                  <span>$20 $39</span>
                </div>
                <LuShoppingCart className="chair_cart"/>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="featu_card">
              <div className="fatu_imgs">
                <img src="/imgs/Image (1).png" alt="" />
                <div className="featu_icons">
                  <FaRegHeart className="hearts" />
                </div>
              </div>
              <div className="chair">
                <div className="chair_text">
                  <p>Library Stool Chair</p>
                  <span>$20 $39</span>
                </div>
                <LuShoppingCart className="chair_cart"/>
              </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="featu_card">
              <div className="fatu_imgs">
                <img src="/imgs/Image (2).png" alt="" />
                <div className="featu_icons">
                  <FaRegHeart className="hearts" />
                </div>
              </div>
              <div className="chair">
                <div className="chair_text">
                  <p>Library Stool Chair</p>
                  <span>$20 $39</span>
                </div>
                <LuShoppingCart className="chair_cart"/>
              </div>
            </div></SwiperSlide>
        <SwiperSlide>
            <div className="featu_card">
              <div className="fatu_imgs">
                <img src="/imgs/Image (3).png" alt="" />
                <div className="featu_icons">
                  <FaRegHeart className="hearts" />
                </div>
              </div>
              <div className="chair">
                <div className="chair_text">
                  <p>Library Stool Chair</p>
                  <span>$20 $39</span>
                </div>
                <LuShoppingCart className="chair_cart"/>
              </div>
            </div></SwiperSlide>
      
      </Swiper>

          
           
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
