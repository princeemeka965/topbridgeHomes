import { FaCheck } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Services = () => {
    const data = [
        "Property Buying & Selling",
        "Property Rental & Leasing",
        "Property Valuation & Appraisal",
        "Property Management",
        "Investment Consultation",
    ];
    const data2 = [
        "Mortgage and Financing Assistance",
        "Legal Assistance and Documentation",
        "Home Staging & Interior Design",
        "Relocation and Moving Services",
        "Market Analysis & Research"
    ];
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
                            <span className="text-[#E4B080] border border-[#E4B080] px-2 py-[4px] text-lg font-bold rounded-[100px] fs-300">
                                Our Services
                            </span>
                            <div className="mt-6">
                                <p className="my-5 mb-6 fs-400 lg:fs-500">
                                    This is where you can find a dream home of your choice without
                                    This is where you can find a dream home of your choice without stressressyour
                                </p>
                            </div>
                            <div className="grid gap-3 lg:gap-4">
                                {data.map((item) => (
                                    <div className="flex gap-x-3 mt-2">
                                        <div className="w-5 lg:w-6 h-5 lg:h-6 mt-2 lg:mt-[4px] circle place-center bg-white shadow-lg">
                                            <FaCheck className="text-[#000] fs-300 lg:fs-500" />
                                        </div>
                                        <div className="w-[90%]">
                                            <p className="fw-600 lg:text-lg">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-[#172748] text-white">
                <div className="box">
                    <div className="lg:flex items-center mt-8 lg:mt-0">
                        <div className="lg:w-6/12">
                            <img
                                src="https://res.cloudinary.com/campnet/image/upload/v1739026588/black-businessman-happy-expression_kn4hmi.jpg"
                                alt="stranded-img"
                                className="lg:w-10/12 rounded-2xl"
                            />
                        </div>
                        <div className="lg:w-6/12 mt-8 lg:mt-0">
                            <div className="grid gap-3 lg:gap-4">
                                <p className="fw-500 text-2xl">Other Services rendered</p>
                                {data2.map((item) => (
                                    <div className="flex gap-x-3 mt-2">
                                        <div className="w-5 lg:w-6 h-5 lg:h-6 mt-2 lg:mt-[4px] circle place-center bg-white shadow-lg">
                                            <FaCheck className="text-[#000] fs-300 lg:fs-500" />
                                        </div>
                                        <div className="w-[90%]">
                                            <p className="fw-600 lg:text-lg">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
