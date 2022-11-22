import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Slider.css"
import { Pagination, Navigation } from "swiper";
import card1 from "../assets/images/slider4-images/card1.jpg";
import card2 from "../assets/images/slider4-images/card2.jpg";
import card3 from "../assets/images/slider4-images/card3.jpg";
import card4 from "../assets/images/slider4-images/card4.jpg";
import card5 from "../assets/images/slider4-images/card5.jpg";
import card6 from "../assets/images/slider4-images/card6.jpg";


export const Slider4 = () => {
  return (
    <>
      <section>
        <div className="container Slider4_container">
          <div className="row">
            <div className="col mt-5 pt-5">
              <h4 className="Slider4_heading fw-bold">
              Browse by experience
              </h4>

              {/* swiper start*/}

              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    280: {
                        //   width: 640,
                          slidesPerView: 1,
                        },
                    567: {
                    //   width: 640,
                      slidesPerView: 3,
                    },
                    // 768: {
                    //   slidesPerView: 5,
                    // },
                  }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img src={card1} alt="" />
                        <h6 className="fw-bold mt-3">Los Angeles</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img src={card2} alt="" />
                        <h6 className="fw-bold mt-3">Miami</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img src={card3} alt="" />
                        <h6 className="fw-bold mt-3">Honolulu</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img src={card4} alt="" />
                        <h6 className="fw-bold mt-3">Denver</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img src={card5} alt="" />
                        <h6 className="fw-bold mt-3">London</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img src={card6} alt="" />
                        <h6 className="fw-bold mt-3">Toronto</h6>
                    </div>
                </SwiperSlide>
              </Swiper>

              {/* swiper end*/}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider4;
