import { FC, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import CallOutMenu from "./CallOut";
import { AiOutlineClose } from "react-icons/ai";
import { NAV_LIST } from "./Routes";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ fixed }) => {
  const [showMenu, setShowMenu] = useState(false);

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
      <div
        className={`w-full lg:p-5 py-3 ${fixed ? "absolute w-full top-0 left-0" : ""
          }`}
      >
        <div className="box">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/campnet/image/upload/v1739015496/Frame_123_lbe5dh.png"
                  alt="logo"
                  width={100}
                  height={60}
                  className="w-10"
                />
              </Link>
            <span className="fw-600 md:text-lg text-sm unbound mt-1">TOP BRIDGE HOMES</span>
            </div>
            <div className="lg:w-9/12 xl:w-8/12 2xl:w-7/12 lg:flex hidden justify-end">
              <ul className="flex gap-x-12 items-center justify-between">
                {NAV_LIST.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.url}
                      onClick={(e) => handleScroll(e, item.name)}
                      className={`text-ter fw-500`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:hidden mb-2">
              {!showMenu ? (
                <HiMenuAlt3
                  className="text-4xl text-primary"
                  onClick={() => setShowMenu(true)}
                />
              ) : (
                <AiOutlineClose className="text-4xl text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
      {showMenu && <CallOutMenu show={() => setShowMenu(!showMenu)} />}
    </>
  );
};

export default Header;
