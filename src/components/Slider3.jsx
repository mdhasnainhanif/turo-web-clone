import React, {useState} from "react";
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

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);
  const [hover8, setHover8] = useState(false);
  const [hover9, setHover9] = useState(false);
  const [hover10, setHover10] = useState(false);
  

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
                        <img width='80%' className="mx-auto" src={hover1 ? card1color : card1} alt="" onMouseEnter={()=>setHover1(true)} onMouseLeave={()=>setHover1(false)} />
                        {/* <img width='80%' className="mx-auto color_img_1 d-none" src={card1color} alt="" /> */}
                        <h6 className="fw-bold mt-3">Los Angeles</h6> 
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover2 ? card2color : card2} alt="" onMouseEnter={()=>setHover2(true)} onMouseLeave={()=>setHover2(false)} />
                        <img width='80%' className="mx-auto color_img_2 d-none" src={card2color} alt="" />
                        <h6 className="fw-bold mt-3">Miami</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover3 ? card3color : card3} onMouseEnter={()=>setHover3(true)} onMouseLeave={()=>setHover3(false)} alt="" />
                        {/* <img width='80%' className="mx-auto color_img_3 d-none" src={card3color} alt="" /> */}
                        <h6 className="fw-bold mt-3">Honolulu</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover4 ? card4color : card4} onMouseEnter={()=>setHover4(true)} onMouseLeave={()=>setHover4(false)} alt="" />
                        {/* <img width='80%' className="mx-auto color_img_4 d-none" src={card4color} alt="" /> */}
                        <h6 className="fw-bold mt-3">Denver</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover5 ? card5color : card5} onMouseEnter={()=>setHover5(true)} onMouseLeave={()=>setHover5(false)} alt="" />
                        {/* <img width='80%' className="mx-auto color_img_5 d-none" src={card5color} alt="" /> */}
                        <h6 className="fw-bold mt-3">London</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover6 ? card6color : card6} onMouseEnter={()=>setHover6(true)} onMouseLeave={()=>setHover6(false)} alt="" />
                        {/* <img width='80%' className="mx-auto color_img_6 d-none" src={card6color} alt="" /> */}
                        <h6 className="fw-bold mt-3">Toronto</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover7 ? card7color : card7} onMouseEnter={()=>setHover7(true)} onMouseLeave={()=>setHover7(false)} alt="" />
                        {/* <img width='80%' className="mx-auto color_img_7 d-none" src={card7color} alt="" /> */}
                        <h6 className="fw-bold mt-3">Jersey City</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover8 ? card8color : card8} onMouseEnter={()=>setHover8(true)} onMouseLeave={()=>setHover8(false)} alt="" />
                        {/* <img width='80%' className="mx-auto color_img_8 d-none" src={card8color} alt="" /> */}
                        <h6 className="fw-bold mt-3">San Francisco</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover9 ? card9color : card9} onMouseEnter={()=>setHover9(true)} onMouseLeave={()=>setHover9(false)} alt="" />
                        <img width='80%' className="mx-auto color_img_9 d-none" src={card9color} alt="" />
                        <h6 className="fw-bold mt-3">Atlanta</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card box_shadow py-2">
                        <img width='80%' className="mx-auto" src={hover10 ? card10color : card10} onMouseEnter={()=>setHover10(true)} onMouseLeave={()=>setHover10(false)} alt="" />
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
