import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Slider.css"
import { Pagination, Navigation } from "swiper";
import card1 from '../assets/images/slider3-images/card1.png'
import card2 from '../assets/images/slider3-images/card2.png'
import card3 from '../assets/images/slider3-images/card3.png'
import card4 from '../assets/images/slider3-images/card4.png'
import card5 from '../assets/images/slider3-images/card5.png'
import card6 from '../assets/images/slider3-images/card6.png'
import card7 from '../assets/images/slider3-images/card7.png'
import card8 from '../assets/images/slider3-images/card8.png'
import card9 from '../assets/images/slider3-images/card9.png'
import card10 from '../assets/images/slider3-images/card10.png'
import card1color from '../assets/images/slider3-images/card1-color.png'
import card2color from '../assets/images/slider3-images/card2-color.png'
import card3color from '../assets/images/slider3-images/card3-color.png'
import card4color from '../assets/images/slider3-images/card4-color.png'
import card5color from '../assets/images/slider3-images/card5-color.png'
import card6color from '../assets/images/slider3-images/card6-color.png'
import card7color from '../assets/images/slider3-images/card7-color.png'
import card8color from '../assets/images/slider3-images/card8-color.png'
import card9color from '../assets/images/slider3-images/card9-color.png'
import card10color from '../assets/images/slider3-images/card10-color.png'

export const Slider3 = () => {
  return (
    <>
      <section>
        <div className="container slider3_container">
          <div className="row">
            <div className="col mt-5 pt-5">
              <h4 className="slider3_heading mt-5 mb-3 fw-bold">
                 Browse by destination
              </h4>

              {/* swiper start*/}

              <Swiper
                slidesPerView={6}
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
                    768: {
                    //   width: 768,
                      slidesPerView: 5,
                    },
                  }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card1} alt="" />
                        <img width='80%' className="mx-auto color_img_1 d-none" src={card1color} alt="" />
                        <h6 className="fw-bold mt-3">Los Angeles</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card2} alt="" />
                        <img width='80%' className="mx-auto color_img_2 d-none" src={card2color} alt="" />
                        <h6 className="fw-bold mt-3">Miami</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card3} alt="" />
                        <img width='80%' className="mx-auto color_img_3 d-none" src={card3color} alt="" />
                        <h6 className="fw-bold mt-3">Honolulu</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card4} alt="" />
                        <img width='80%' className="mx-auto color_img_4 d-none" src={card4color} alt="" />
                        <h6 className="fw-bold mt-3">Denver</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card5} alt="" />
                        <img width='80%' className="mx-auto color_img_5 d-none" src={card5color} alt="" />
                        <h6 className="fw-bold mt-3">London</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card6} alt="" />
                        <img width='80%' className="mx-auto color_img_6 d-none" src={card6color} alt="" />
                        <h6 className="fw-bold mt-3">Toronto</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card7} alt="" />
                        <img width='80%' className="mx-auto color_img_7 d-none" src={card7color} alt="" />
                        <h6 className="fw-bold mt-3">Jersey City</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card8} alt="" />
                        <img width='80%' className="mx-auto color_img_8 d-none" src={card8color} alt="" />
                        <h6 className="fw-bold mt-3">San Francisco</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card9} alt="" />
                        <img width='80%' className="mx-auto color_img_9 d-none" src={card9color} alt="" />
                        <h6 className="fw-bold mt-3">Atlanta</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={card10} alt="" />
                        <img width='80%' className="mx-auto color_img_10 d-none" src={card10color} alt="" />
                        <h6 className="fw-bold mt-3">Phoenix</h6>
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

export default Slider3;
