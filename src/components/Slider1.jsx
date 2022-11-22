import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Slider.css"
import { Pagination, Navigation } from "swiper";
import card1 from '../assets/images/slider1-images/card1.jpg'
import card2 from '../assets/images/slider1-images/card2.jpg'
import card3 from '../assets/images/slider1-images/card3.jpg'
import card4 from '../assets/images/slider1-images/card4.jpg'
import card5 from '../assets/images/slider1-images/card5.jpg'
import card6 from '../assets/images/slider1-images/card6.jpg'
import card7 from '../assets/images/slider1-images/card7.jpg'
import card8 from '../assets/images/slider1-images/card8.jpg'
import card9 from '../assets/images/slider1-images/card9.jpg'
import card10 from '../assets/images/slider1-images/card10.jpg'

export const Slider1 = () => {
  return (
    <>
      <section>
        <div className="container slider1_container">
          <div className="row">
            <div className="col">
              <h1 className="text-center slider1_heading mt-5">
                Find your drive
              </h1>
              <h3 className="text-center slider1_para mt-2 mb-3">
                Explore the world's largest car sharing marketplace
              </h3>

              {/* swiper start*/}

              <Swiper
                slidesPerView={5}
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
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card1} alt="" />
                        <h6 className="fw-bold mt-2">BMW</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card2} alt="" />
                        <h6 className="fw-bold mt-2">Mercedes-Benz</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card3} alt="" />
                        <h6 className="fw-bold mt-2">Toyota</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card4} alt="" />
                        <h6 className="fw-bold mt-2">Nissan</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card5} alt="" />
                        <h6 className="fw-bold mt-2">Lamborghini</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card6} alt="" />
                        <h6 className="fw-bold mt-2">Ford</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card7} alt="" />
                        <h6 className="fw-bold mt-2">Jeep</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card8} alt="" />
                        <h6 className="fw-bold mt-2">Tesla</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card9} alt="" />
                        <h6 className="fw-bold mt-2">Subaru</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow">
                        <img className="img-fluid" src={card10} alt="" />
                        <h6 className="fw-bold mt-2">Porsche</h6>
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

export default Slider1;
