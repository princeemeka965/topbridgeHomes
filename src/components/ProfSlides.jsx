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
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739038819/3d-rendering-modern-dining-room-living-room-with-retro-armchair-european-style_sjnc2z.jpg" alt="img1" className="w-full m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                    <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739038821/asphalt-road-town-sunset-rural-landscape_wvyl8q.jpg" alt="img1" className="w-full m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                    <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739038825/street-ordinary-catalan-town_g5mbyb.jpg" alt="img1" className="w-full m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739038893/row-houses-bristol-england_uaquc7.jpg" alt="img1" className="w-full m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1685438426/c416b337657ef451d71d6203d3aa190e_hwvevz.jpg" alt="img1" className="w-full m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739039160/house-isolated-field_gg66nx.jpg" alt="img1" className="w-full m-auto" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="">
                <div className="text-center slider-bg py-4 rounded-lg">
                <div className=" w-full mx-auto circle p-3 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1685355331/35bf27d57db80afc7e8079e6cdfc6df6_fxhbzv.jpg" alt="img1" className="w-full m-auto" />
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
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739038819/3d-rendering-modern-dining-room-living-room-with-retro-armchair-european-style_sjnc2z.jpg" alt="img1" className="w-full m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739038821/asphalt-road-town-sunset-rural-landscape_wvyl8q.jpg" alt="img1" className="w-full m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739038825/street-ordinary-catalan-town_g5mbyb.jpg" alt="img1" className="w-full m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1739038893/row-houses-bristol-england_uaquc7.jpg" alt="img1" className="w-full m-auto" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="text-center slider-bg py-4 rounded-lg">
                        <div className=" w-full mx-auto circle p-6 bg-white">
                        <img src="https://res.cloudinary.com/campnet/image/upload/v1685438426/c416b337657ef451d71d6203d3aa190e_hwvevz.jpg" alt="img1" className="w-full m-auto" />
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