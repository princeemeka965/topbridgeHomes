import React from "react";

export default function ProfSlides() {

    const images = [
        "https://res.cloudinary.com/campnet/image/upload/v1739179066/WhatsApp_Image_2025-02-09_at_12.12.44_adf3f039_z3gfmg.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739039160/house-isolated-field_gg66nx.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1685355331/35bf27d57db80afc7e8079e6cdfc6df6_fxhbzv.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739179061/WhatsApp_Image_2025-02-09_at_12.13.40_fc335887_ykcylp.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739179059/WhatsApp_Image_2025-02-09_at_12.17.13_31d7f2cd_tnrgo9.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739179058/WhatsApp_Image_2025-02-09_at_12.17.13_2806d432_wne6is.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739179058/WhatsApp_Image_2025-02-09_at_12.17.13_28e55a6a_vapqzq.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739213862/WhatsApp_Image_2025-02-10_at_19.56.30_2b993db8_sdqw2s.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739213939/WhatsApp_Image_2025-02-10_at_19.58.01_23b9f4f9_vhhorx.jpg"
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {images.map((src, index) => (
                <div key={index} className="relative w-full">
                    <img
                        src={src}
                        alt={`Collage ${index}`}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            ))}
        </div>)
}

