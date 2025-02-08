import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle"
import { register } from "swiper/element/bundle";
import { Autoplay, EffectFade } from "swiper/modules";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@material-tailwind/react";
// register Swiper custom elements
register();

const HeroSlide = () => {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{ delay: 6000 }}
        modules={[Autoplay, EffectFade]}
        className="h-[570px]"
      >
        <SwiperSlide>
          <div
            className={`w-full h-full`}
          >
            <img src="https://res.cloudinary.com/campnet/image/upload/v1739016001/luxury-water-swimming-resort-hotel_csulj0.jpg" className="absolute w-full h-full object-cover" />
            <div className="absolute w-full h-full bg-[rgba(0,0,0,.6)]" />
            <div className="box relative z-10 h-full text-white flex items-center">
              <div className="">
                <div className="flex">
                  <div className="border-2 flex items-center gap-2 text-white px-3 py-2 rounded-[100px] border-[#FEB470]">
                    <BsClock className="text-[#FEB470] text-[14px]" />
                    <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#FEB470]">
                      Available 24/7 at your service
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[658px] mt-10 lg:mt-3">
                  <p className="text-2xl md:text-3xl lg:text-[45px] fw-600 leading-[40px] lg:leading-normal">
                    Welcome to TopBridge Homes – where quality, comfort, and elegance meet to create the perfect living experience.
                  </p>
                </div>
                <div className="lg:flex gap-x-6 itms-center mt-10">
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full h-full`}
          >
            <img src="https://res.cloudinary.com/campnet/image/upload/v1739016001/trees-near-white-houses_dfuqtg.jpg" className="absolute w-full h-full object-cover" />
            <div className="absolute w-full h-full bg-[rgba(0,0,0,.6)]" />
            <div className="box relative z-10 h-full text-white flex items-center">
              <div className="">
                <div className="flex">
                  <div className="border-2 flex items-center gap-2 text-white px-3 py-2 rounded-[100px] border-[#FEB470]">
                    <BsClock className="text-[#FEB470] text-[14px]" />
                    <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#FEB470]">
                      Available 24/7 at your service
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[658px] mt-10 lg:mt-3">
                  <p className="text-2xl md:text-3xl lg:text-[45px] fw-600 leading-[40px] lg:leading-normal">
                    Welcome to TopBridge Homes – where quality, comfort, and elegance meet to create the perfect living experience.
                  </p>
                </div>
                <div className="lg:flex gap-x-6 itms-center mt-10">
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full h-full`}
          >
            <img src="https://res.cloudinary.com/campnet/image/upload/v1739016847/old-buildings-port-evening_qdpohd.jpg" className="absolute w-full h-full object-cover" />
            <div className="absolute w-full h-full bg-[rgba(0,0,0,.6)]" />
            <div className="box relative z-10 h-full text-white flex items-center">
              <div className="">
                <div className="flex">
                  <div className="border-2 flex items-center gap-2 text-white px-3 py-2 rounded-[100px] border-[#FEB470]">
                    <BsClock className="text-[#FEB470] text-[14px]" />
                    <p className="fs-200 md:fs-300 lg:fs-400 fw-500 text-[#FEB470]">
                      Available 24/7 at your service
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[658px] mt-10 lg:mt-3">
                  <p className="text-2xl md:text-3xl lg:text-[45px] fw-600 leading-[40px] lg:leading-normal">
                    Welcome to TopBridge Homes – where quality, comfort, and elegance meet to create the perfect living experience.
                  </p>
                </div>
                <div className="lg:flex gap-x-6 itms-center mt-10">
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlide;
