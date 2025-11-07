import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import "./BannerSlider.css";

import "swiper/css";
import "swiper/css/pagination";

function BannerSlider() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        <SwiperSlide>
          <div className="banner">
            <img src="banner2.jpg" alt="image does not found" />
            <div className="banner-content">
              <div>
                <p>WATCHPOINT COLLECTION</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, recusandae facilis?
                  <br />
                  Possimus, distinctio? Placeat, veritatis?
                </span>
              </div>
              <div className="buy-now-btn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img src="banner3.jpg" alt="image does not found" />
            <div className="banner-content">
              <div>
                <p>WATCHPOINT COLLECTION</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, recusandae facilis?
                  <br />
                  Possimus, distinctio? Placeat, veritatis?
                </span>
              </div>
              <div className="buy-now-btn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="banner">
            <img src="banner4.jpg" alt="image does not found" />
            <div className="banner-content">
              <div>
                <p>WATCHPOINT COLLECTION</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, recusandae facilis?
                  <br />
                  Possimus, distinctio? Placeat, veritatis?
                </span>
              </div>
              <div className="buy-now-btn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="banner">
            <img src="banner1.jpg" alt="image does not found" />
            <div className="banner-content">
              <div>
                <p>WATCHPOINT COLLECTION</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, recusandae facilis?
                  <br />
                  Possimus, distinctio? Placeat, veritatis?
                </span>
              </div>
              <div className="buy-now-btn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img src="banner5.jpg" alt="image does not found" />
            <div className="banner-content">
              <div>
                <p>WATCHPOINT COLLECTION</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, recusandae facilis?
                  <br />
                  Possimus, distinctio? Placeat, veritatis?
                </span>
              </div>
              <div className="buy-now-btn">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerSlider;
