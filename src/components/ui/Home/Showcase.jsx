import React from "react";
import appleStore from "../../../assets/apple-store.png";
import image from "../../../assets/paly-section.png";
import playStore from "../../../assets/play-store.png";

export default function Showcase() {
  return (
    <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 gap-10 items-center my-14">
      <div>
        <h2 className="text-4xl font-bold text-secondary">
          It’s Now More Easy to <span className="text-primary">Booking</span> by
          Our Mobile App
        </h2>
        <p className="my-5">
          All you need to do is downlode one of the best delivery apps, make a
          and most companies are opting for mobile app devlopment for food
          delivery
        </p>
        <div className="flex items-center gap-10">
          <img src={playStore} alt="" />
          <img src={appleStore} alt="" />
        </div>
      </div>
      <div>
        <img className="w-[80%]" src={image} alt="" />
      </div>
    </div>
  );
}
