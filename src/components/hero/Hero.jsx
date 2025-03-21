import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="heroSlider01">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <div className="bgggggg">
          <SwiperSlide>
            {" "}
            <div className="container">
              <div className="home_cards">
                <div className="home_card">
                  <h2>Welcome to chairy</h2>
                  <h1>Best Furniture Collection for your interior.</h1>
                  <button>
                    Shop Now <FaArrowRightLong />
                  </button>
                </div>
                <div className="home_imgs">
                  <img src="/imgs/Product Image.png" alt="" />
                  <div className="home_foyiz">
                    <span>54%</span>
                    <p>Discount</p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="container">
              <div className="home_cards">
                <div className="home_card">
                  <h2>Welcome to chairy</h2>
                  <h1>Best Furniture Collection for your interior.</h1>
                  <button>
                    Shop Now <FaArrowRightLong />
                  </button>
                </div>
                <div className="home_imgs">
                  <img src="/imgs/bg_imgs.png" alt="" />
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="container">
              <div className="home_cards">
                <div className="home_card">
                  <h2>Welcome to chairy</h2>
                  <h1>Best Furniture Collection for your interior.</h1>
                  <button>
                    Shop Now <FaArrowRightLong />
                  </button>
                </div>
                <div className="home_imgs">
                  <img src="/imgs/bg_imgs1.png" alt="" />
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="container">
              <div className="home_cards">
                <div className="home_card">
                  <h2>Welcome to chairy</h2>
                  <h1>Best Furniture Collection for your interior.</h1>
                  <button>
                    Shop Now <FaArrowRightLong />
                  </button>
                </div>
                <div className="home_imgs">
                  <img src="/imgs/bg_imgs2.png" alt="" />
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="container">
              <div className="home_cards">
                <div className="home_card">
                  <h2>Welcome to chairy</h2>
                  <h1>Best Furniture Collection for your interior.</h1>
                  <button>
                    Shop Now <FaArrowRightLong />
                  </button>
                </div>
                <div className="home_imgs">
                  <img src="/imgs/bg_imgs3.png" alt="" />
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
        </div>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Hero;
