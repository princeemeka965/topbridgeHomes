
export default function Contact() {
    return (
        <>
            <div className="w-full flex flex-col" id="contact-us">
                <section className="breadcrumb">
                    <div className="flex flex-col">
                        <div className="w-full flex flex-col xl:px-40 lg:pl-20 lg:pr-36 md:px-20 px-5 lg:gap-10 md:gap-8 gap-5 h-full">
                            <h1 className="text-4xl font-bold">Contact Us</h1>
                        </div>
                    </div>
                    <div className="w-full flex flex-col xl:px-40 lg:pl-20 lg:pr-36 md:px-20 px-5 py-3 lg:gap-10 md:gap-8 gap-5 h-full ">
                        <div className="relative w-full overflow-hidden Ju">
                            <div className="w-full flex flex-col gap-2 justify-center items-center mt-16">
                                <div className="flex">
                                    <h1 className="text-3xl text-center font-bold md:text-2xl">Reach out to us concerning information, feedbacks and inquiry</h1>

                                </div>
                            </div>

                            {/* Card Section */}
                            <div className="w-full flex md:flex-row flex-col">
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 mt-14"
                                    style={{ position: "relative" }}
                                >

                                    {/* Sell Anything Card */}
                                    <div
                                        className="h-full w-full rounded-lg p-6 flex flex-col bg-white shadow-lg text-black items-center border"
                                    >
                                        <div className="w-[80px] h-[80px]">
                                            <img
                                                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1738002864/kuduMart/joreawbfjisqvuoomkva.png"
                                                alt="Sell Anything Icon"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <h3 className="mt-3 text-lg font-semibold">
                                            Email Support
                                        </h3>
                                        <p className="mt-2 text-md leading-loose text-center">
                                            support@topbridgeehomes.com <br></br>
                                            info@topbridgehomes.com
                                        </p>
                                    </div>

                                    {/* Bid Your Price Card */}
                                    <div
                                        className="h-full w-full rounded-lg p-6 flex flex-col bg-white shadow-lg text-black items-center border"
                                    >
                                        <div className="w-[80px] h-[80px]">
                                            <img
                                                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1738002864/kuduMart/xhg42osawx2hb4lengd2.png"
                                                alt="Bid Your Price Icon"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <h3 className="mt-3 text-lg font-semibold">
                                            Call  & WhatsApp Line
                                        </h3>
                                        <p className="mt-2 text-md leading-loose text-center">
                                            +2347032803050 <br></br>
                                        </p>
                                    </div>


                                    <div
                                        className="h-full w-full rounded-lg p-8 flex flex-col bg-white shadow-lg text-black items-center border"
                                    >
                                        <div className="w-[80px] h-[80px]">
                                            <img
                                                src="https://res.cloudinary.com/campnet/image/upload/v1739050948/vector-design-gps-tracker-icon-style_1250006-35649_b8whdq.jpg"
                                                alt="Auction Icon"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <h3 className="mt-3 text-lg font-semibold">Office Address</h3>
                                        <p className="mt-2 text-md leading-loose text-center">
                                            3, Olufunmilola Okikiolu Street, Off Toyin Street, Ikeja, Lagos State , Ikeja, Nigeria.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col xl:px-40 lg:pl-20 lg:pr-36 md:px-20 px-5 py-3 lg:gap-10 md:gap-8 gap-5 h-full">
                        {/* Map and Contact Form */}
                        <div className="grid md:grid-cols-1 gap-9 -mb-10">
                            <div className="bg-white rounded-lg overflow-hidden">
                                <iframe
                                    title="Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126202.72931046391!2d3.2998591051244743!3d7.163197312558428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103aeb1e3d7cc6fd%3A0xa1360f091a02c5f9!2sAbeokuta!5e0!3m2!1sen!2sng!4v1614303830927!5m2!1sen!2sng"
                                    width="100%"
                                    height="380"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}