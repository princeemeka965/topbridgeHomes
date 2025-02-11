import React from "react";

export default function ProfSlides() {
    const images = [
        "https://res.cloudinary.com/campnet/image/upload/v1739179066/WhatsApp_Image_2025-02-09_at_12.12.44_adf3f039_z3gfmg.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739039160/house-isolated-field_gg66nx.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1685355331/35bf27d57db80afc7e8079e6cdfc6df6_fxhbzv.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739179061/WhatsApp_Image_2025-02-09_at_12.13.40_fc335887_ykcylp.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739179059/WhatsApp_Image_2025-02-09_at_12.17.13_31d7f2cd_tnrgo9.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739179058/WhatsApp_Image_2025-02-09_at_12.17.13_2806d432_wne6is.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739271616/WhatsApp_Image_2025-02-11_at_11.52.38_c0189a36_lket7k.jpg",
        "https://res.cloudinary.com/campnet/image/upload/v1739271616/WhatsApp_Image_2025-02-11_at_11.52.01_9045532b_zzm11a.jpg"
    ];

    return (
        <div className="p-4">
            {/* First 6 images: 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
                {images.slice(0, 6).map((src, index) => (
                    <div key={index} className="relative w-full">
                        <img
                            src={src}
                            alt={`Collage ${index}`}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Last 2 images: 2-column grid on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {images.slice(-2).map((src, index) => (
                    <div key={index + 6} className="relative w-full">
                        <img
                            src={src}
                            alt={`Collage ${index + 6}`}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
