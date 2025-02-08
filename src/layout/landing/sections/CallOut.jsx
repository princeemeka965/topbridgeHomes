import { Link } from "react-router-dom";
import { FOOTER_LIST } from "./Routes";
import React from "react";


const CallOutMenu = ({ show }) => {
  const handleScroll = (e, name) => {
    e.preventDefault();
    // Convert the link name to an id (e.g., "About Us" -> "about-us")
    const sectionId = name.toLowerCase().replace(/\s+/g, '-');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed menu-top top-0 h-screen z-[1000] bg-modal w-full"
        onClick={show}>
        <div className="bg-white relative menu-pop h-full text-primary pl-5 pt-8 w-[75%]">
          <div className="mb-16">
            <div className="flex gap-3">
              <img
                src="https://res.cloudinary.com/campnet/image/upload/v1739015496/Frame_123_lbe5dh.png"
                alt="logo"
                width={100}
                height={80}
                className="w-10"
              />
              <span className="fw-600 md:text-lg text-sm unbound mt-1">TOP BRIDGE HOMES</span>
            </div>
          </div>
          <div>
            <ul className=" grid gap-6">
              {FOOTER_LIST.map((item, i) => (
                <li key={i}>
                  <Link to={item.url} className=""
                    onClick={(e) => handleScroll(e, item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallOutMenu;