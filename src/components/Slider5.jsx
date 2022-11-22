import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { FaAward, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Slider.css"
import { Pagination, Navigation } from "swiper";
import card1 from '../assets/images/slider5-images/card1.jpg'
import card2 from '../assets/images/slider5-images/card2.jpg'
import card3 from '../assets/images/slider5-images/card3.jpg'
import card4 from '../assets/images/slider5-images/card4.jpg'
import card5 from '../assets/images/slider5-images/card5.jpg'


export const Slider5 = () => {
  return (
    <>
      <section>
        <div className="container Slider5_container">
          <div className="row">
            <div className="col mt-5 pt-5">
            <h1 className="text-center meet_heading mb-3">Meet the hosts</h1>
              <h4 className="Slider5_heading fw-bold mb-3">
              Top hosts on Turo
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
                    <div className="container card box_shadow py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <img className="rounded-circle mx-auto" width='80%' src={card1} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-start">Artem S.</h6>
                                <div className="d-flex">
                                <FaAward />
                                <h6>&nbsp; All Star Host</h6>
                                </div>
                                <h6 className="text509 text-start">&nbsp; 509 trips Joined Oct 2017</h6>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <br />
                                    <div className="d-flex">
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                </div>
                                <div className="mt-1">
                                <p className="text-start h6">Beautiful <strong>car</strong>, sporty and descent on gas!</p>
                                <p className="mt-3 text-start fs-6">Deion W. - Nov 2022</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container card box_shadow py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <img className="rounded-circle mx-auto" width='80%' src={card1} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-start">Artem S.</h6>
                                <div className="d-flex">
                                <FaAward />
                                <h6>&nbsp; All Star Host</h6>
                                </div>
                                <h6 className="text509 text-start">&nbsp; 509 trips Joined Oct 2017</h6>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <br />
                                    <div className="d-flex">
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                </div>
                                <div className="mt-1">
                                <p className="text-start h6">Beautiful <strong>car</strong>, sporty and descent on gas!</p>
                                <p className="mt-3 text-start fs-6">Deion W. - Nov 2022</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container card box_shadow py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <img className="rounded-circle mx-auto" width='80%' src={card2} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-start">Artem S.</h6>
                                <div className="d-flex">
                                <FaAward />
                                <h6>&nbsp; All Star Host</h6>
                                </div>
                                <h6 className="text509 text-start">&nbsp; 509 trips Joined Oct 2017</h6>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <br />
                                    <div className="d-flex">
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                </div>
                                <div className="mt-1">
                                <p className="text-start h6">Beautiful <strong>car</strong>, sporty and descent on gas!</p>
                                <p className="mt-3 text-start fs-6">Deion W. - Nov 2022</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container card box_shadow py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <img className="rounded-circle mx-auto" width='80%' src={card3} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-start">Artem S.</h6>
                                <div className="d-flex">
                                <FaAward />
                                <h6>&nbsp; All Star Host</h6>
                                </div>
                                <h6 className="text509 text-start">&nbsp; 509 trips Joined Oct 2017</h6>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <br />
                                    <div className="d-flex">
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                </div>
                                <div className="mt-1">
                                <p className="text-start h6">Beautiful <strong>car</strong>, sporty and descent on gas!</p>
                                <p className="mt-3 text-start fs-6">Deion W. - Nov 2022</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container card box_shadow py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <img className="rounded-circle mx-auto" width='80%' src={card4} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-start">Artem S.</h6>
                                <div className="d-flex">
                                <FaAward />
                                <h6>&nbsp; All Star Host</h6>
                                </div>
                                <h6 className="text509 text-start">&nbsp; 509 trips Joined Oct 2017</h6>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <br />
                                    <div className="d-flex">
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                </div>
                                <div className="mt-1">
                                <p className="text-start h6">Beautiful <strong>car</strong>, sporty and descent on gas!</p>
                                <p className="mt-3 text-start fs-6">Deion W. - Nov 2022</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container card box_shadow py-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <img className="rounded-circle mx-auto" width='80%' src={card5} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-start">Artem S.</h6>
                                <div className="d-flex">
                                <FaAward />
                                <h6>&nbsp; All Star Host</h6>
                                </div>
                                <h6 className="text509 text-start">&nbsp; 509 trips Joined Oct 2017</h6>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <br />
                                    <div className="d-flex">
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                <FaStar className="ps-1" style={{color: "#593CFB", fontSize: "20px"}}/>
                                </div>
                                <div className="mt-1">
                                <p className="text-start h6">Beautiful <strong>car</strong>, sporty and descent on gas!</p>
                                <p className="mt-3 text-start fs-6">Deion W. - Nov 2022</p>
                                </div>
                                </div>
                            </div>
                        </div>
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

export default Slider5;
