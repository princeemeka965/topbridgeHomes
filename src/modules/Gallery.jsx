import ProfSlides from "../components/ProfSlides";

const Gallery = () => {
    return (
        <div className="section py-0" id="gallery">
            <div className="box lg:section py-5">
                <div>
                    <div>
                        <p className="text-xl lg:text-3xl m-auto text-center lg:w-6/12 fw-500 mb-4 ">
                            Our Gallery
                        </p>
                        <p className="text-center m-auto text-base md:text-lg lg:w-6/12">
                            Welcome to our gallery—a curated collection of exceptional properties that embody luxury, comfort, and timeless design. Each image offers a glimpse into the unique character and architectural beauty of our listings, inviting you to envision a life elevated by style and sophistication.
                        </p>
                    </div>
                </div>
                <div className="mt-12 lg:block hidden">
                    <ProfSlides />
                </div>
                <div className="mt-2 lg:hidden">
                    <ProfSlides />
                </div>
            </div>
        </div>
    );
};

export default Gallery;