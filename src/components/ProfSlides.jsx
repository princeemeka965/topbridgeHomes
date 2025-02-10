import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";


export default function ProfSlides() {


    return (
        <Swiper
            spaceBetween={10}
            autoplay={{ delay: 5000 }}
            effect="coverflow"
            grabCursor={true}
            loop={true}
            centeredSlides={false}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="text-white"
        >
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                    <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179066/WhatsApp_Image_2025-02-09_at_12.12.44_adf3f039_z3gfmg.jpg" alt="img1" className="w-full object-cover h-96 m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                    <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179061/WhatsApp_Image_2025-02-09_at_12.13.40_fc335887_ykcylp.jpg" alt="img1" className="w-full object-cover h-96 m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                    <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179059/WhatsApp_Image_2025-02-09_at_12.17.13_31d7f2cd_tnrgo9.jpg" alt="img1" className="w-full object-cover h-96 m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179058/WhatsApp_Image_2025-02-09_at_12.17.13_2806d432_wne6is.jpg" alt="img1" className="w-full object-cover h-96 m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179058/WhatsApp_Image_2025-02-09_at_12.17.13_28e55a6a_vapqzq.jpg" alt="img1" className="w-full object-cover h-96 m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739039160/house-isolated-field_gg66nx.jpg" alt="img1" className="w-full h-96 object-cover m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1685355331/35bf27d57db80afc7e8079e6cdfc6df6_fxhbzv.jpg" alt="img1" className="w-full object-cover h-96 m-auto" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export function ProfSlidesSm() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide className="mb-8">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179066/WhatsApp_Image_2025-02-09_at_12.12.44_adf3f039_z3gfmg.jpg" alt="img1" className="w-full h-48 object-cover m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179061/WhatsApp_Image_2025-02-09_at_12.13.40_fc335887_ykcylp.jpg" alt="img1" className="w-full h-48 object-cover m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179059/WhatsApp_Image_2025-02-09_at_12.17.13_31d7f2cd_tnrgo9.jpg" alt="img1" className="w-full h-48 object-cover m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179058/WhatsApp_Image_2025-02-09_at_12.17.13_2806d432_wne6is.jpg" alt="img1" className="w-full h-48 object-cover m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739179058/WhatsApp_Image_2025-02-09_at_12.17.13_28e55a6a_vapqzq.jpg" alt="img1" className="w-full h-48 m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739039160/house-isolated-field_gg66nx.jpg" alt="img1" className="w-full m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1685355331/35bf27d57db80afc7e8079e6cdfc6df6_fxhbzv.jpg" alt="img1" className="w-full m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}