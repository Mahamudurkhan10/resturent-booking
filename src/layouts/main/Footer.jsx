import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.png";

export default function Footer() {
  const socialItems = [
    {
      path: "",
      icon: <Instagram />,
    },
    {
      path: "",
      icon: <Facebook />,
    },
    {
      path: "",
      icon: <Twitter />,
    },
  ];
  return (
    <div className="bg-base text-white pt-14 px-24">
      <div className="lg:flex itmes-center justify-between">
        <img className="w-64" src={logo} alt="" />
        <div className="lg:flex items-center gap-10">
          <div>
            <h2 className="text-xl mb-2">Follow us</h2>
            <div className="flex items-center gap-2">
              {socialItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  className="bg-white text-gray p-2 rounded-full hover:bg-primary duration-200 hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl mb-2">Call us</h2>
            <p className="text-lg">+48 661 120 494</p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <p className="w-full lg:w-2/4">
          The Food we had enjoyed at the time of dinner. It was really delicious
          taste with great quality, everything had unique taste which we had
          ordered, nice arrangement and services from the staff while eating, we
          found nothing bad about this hotel.
        </p>
      </div>

      <div className="lg:flex items-center justify-between border-t py-8">
        <div>
          <p>Design & Developed by Sparktech Agency</p>
        </div>
        <div className="lg:flex items-center gap-10">
          <Link to="#">About us</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of use</Link>
        </div>
      </div>
    </div>
  );
}

{
  /* <a href='www.instagram.com' target='_blank' className='bg-white text-gray p-2 rounded-full hover:bg-primary duration-200 hover:text-white'>
              <Instagram />
            </a>
            <div className='bg-white text-gray p-2 rounded-full hover:bg-primary duration-200 hover:text-white'>
              <Facebook />
            </div>
            <div className='bg-white text-gray p-2 rounded-full hover:bg-primary duration-200 hover:text-white'>
              <Twitter />
            </div> */
}
