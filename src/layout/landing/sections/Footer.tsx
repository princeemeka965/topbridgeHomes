import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import React from "react";

export const socials = [
  {
    name: "twitter",
    to: "/",
    icon: <SiTwitter className="lg:text-3xl text-xl" />,
  },
  {
    name: "facebook",
    to: "/",
    icon: <SiFacebook className="lg:text-3xl text-xl" />,
  },
  {
    name: "instagram",
    to: "/",
    icon: <BiLogoInstagramAlt className="lg:text-4xl text-xl" />,
  },
  {
    name: "linkedin",
    to: "/",
    icon: <SiLinkedin className="lg:text-3xl text-xl" />,
  },
];

const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-[#172748] ">
      <div className="box text-white">
        <div className="lg:pt-10 py-12 lg:grid lg:grid-cols-6">
          <div className="col-span-2 md:pt-0 pt-5">
            <img
              src="https://res.cloudinary.com/campnet/image/upload/v1739015496/Frame_123_lbe5dh.png"
              alt="logo"
              className="w-10"
              />
            <div className="lg:w-10/12 mt-4">
              <p className="fs-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Fusce ut placerat orci. Nulla ac interdum ligula. Aenean et ipsum vel augue vehicula aliquet.
              </p>
            </div>
            <div className="lg:pl-0">
              {/* <p className="fs-500">+0 123 456 7890</p>
              <p className="mt-3 fs-500 ">N0 1 Company physical address, Country. Earth</p> */}
              <ul className="flex gap-x-5 lg:gap-x-4 mt-8">
                {socials.map((item, i) => (
                  <li className="text-white cursor-pointer" key={i}>
                    {item.icon}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="fw-600 mb-4 mt-10 lg:mt-0">Company</p>
            <ul className="grid gap-6 fs-500">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/faqs"}>FAQs</Link>
              </li>
              <li>
                <Link to={"/join-us"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="fw-600 mb-4 mt-10 lg:mt-0">Legal</p>
            <ul className="grid gap-6 fs-500">
              <li>
                <Link to={"/terms"}>Terms of Service</Link>
              </li>
              <li>
                <Link to={"/privacy"}>Privacy Policy</Link>
              </li>
              {/* <li><Link to={'/cookie'}>Cookies Policy</Link></li> */}
            </ul>
          </div>
          <div>
            <p className="fw-600 mb-4 mt-10 lg:mt-0">Support</p>
            <ul className="grid gap-6 fs-500">
              <li>
                <Link to={"/request"}>Get Help</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-500">
          <p className="text-center pb-4 fs-500 text-white">
            Copyright © {date.getFullYear()} TOP BRIDGE HOMES
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
