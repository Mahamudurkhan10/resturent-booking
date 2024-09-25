import { Search } from "lucide-react";
import React from "react";
import image from "../../../assets/banner.png";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 gap-14 items-center">
      <div className="space-y-4">
        <h2 className="text-5xl font-semibold">
          Good <span className="text-primary">booking</span>, great <br />{" "}
          memories
        </h2>
        <p className="text-2xl">
          Enable diners to customize their booking by requesting a specific
          table location or view.
        </p>
        <div className="border flex items-center w-2/3 p-1 rounded-full">
          <input
            type="text"
            className="outline-none px-2 w-full py-1 bg-transparent"
            name=""
            id=""
            placeholder="Search Food"
          />
          <button className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full">
            <Search />
          </button>
        </div>
      </div>
      <div>
        <img className="w-[96%]" src={image} alt="" />
      </div>
    </div>
  );
}
