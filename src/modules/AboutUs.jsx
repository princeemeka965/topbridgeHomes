import { FaCheck } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
            <div className="section bg-[#172748] text-white">
                <div className="box">
                    <div className="lg:flex items-center flex-row-reverse">
                        <div className="lg:w-6/12 flex justify-center">
                            <img
                                src="https://res.cloudinary.com/campnet/image/upload/v1739026084/happy-man-with-house_klsptt.jpg"
                                alt="stranded-img"
                                className="w-full lg:w-10/12 rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="lg:w-6/12 mt-8 lg:mt-0">
                            <span className="text-[#E4B080] border border-[#E4B080] uppercase px-2 py-[4px] text-lg font-bold rounded-[100px] fs-300">
                                About Us
                            </span>
                            <div className="mt-6">
                                <p className="my-5 mb-6 fs-400 lg:fs-500">
                                    Bridging Your Dreams with Reality
                                </p>
                            </div>
                            <div className="grid gap-3 lg:gap-4 text-white">
                                <p className="text-lg text-white">
                                    At TopBridgeHomes, we believe that your home is more than just a place to live—it is a sanctuary
                                    where dreams are nurtured and memories are made. With decades of experience in the real estate market,
                                    our team is dedicated to matching discerning buyers and sellers with properties that embody quality,
                                    comfort, and elegance.
                                </p>
                                <p className="mt-6 text-lg text-white">
                                    Our mission is to bridge the gap between your vision and your perfect home. Whether you’re looking for a
                                    modern urban retreat, a cozy suburban haven, or a luxurious estate, we offer personalized service,
                                    transparent processes, and expert guidance every step of the way.
                                </p>
                                <p className="mt-6 text-lg text-white">
                                    At TopBridgeHomes, we are not just in the business of real estate—we’re in the business of building
                                    futures. Let us help you create a foundation for a lifetime of success and happiness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutUs;
