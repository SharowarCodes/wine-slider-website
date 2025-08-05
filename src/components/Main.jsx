import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import SliderP from "./SliderP";

const dots = [
  "#DE443B", "#28a745", "#007bff", "#ff9800", "#9c27b0",
  "#00bcd4", "#e91e63", "#3f51b5", "#8bc34a", "#795548",
];

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentColor = dots[activeIndex];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slider */}
      <SliderP activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* Header Row */}
      <div className="absolute top-10 left-0 w-full flex justify-between items-center px-10 z-20">
        {/* Logo */}
        <div className="text-[30px] font-bold text-white">WineFeg</div>

        {/* Center Buttons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="px-6 py-2 text-white rounded-full shadow-md transition-colors duration-300"
            style={{ backgroundColor: currentColor }}
          >
            Products
          </button>
          <button
            className="px-6 py-2 text-white rounded-full shadow-md transition-colors duration-300"
            style={{ backgroundColor: currentColor }}
          >
            Contact
          </button>
        </div>

        {/* Icons */}
        <div
          className="flex space-x-6 text-xl text-white px-4 py-2 rounded-full transition-colors duration-300"
          style={{ backgroundColor: currentColor }}
        >
          <FaUser className="cursor-pointer hover:opacity-80" />
          <FaShoppingCart className="cursor-pointer hover:opacity-80" />
        </div>
      </div>
    </section>
  );
}
