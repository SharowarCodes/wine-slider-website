import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import HellBackground from "./HellBackground";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import 10 different product images
import img1 from "../assets/Products/p01.png";
import img2 from "../assets/Products/p01.png";
import img3 from "../assets/Products/p01.png";
import img4 from "../assets/Products/p01.png";
import img5 from "../assets/Products/p01.png";
import img6 from "../assets/Products/p01.png";
import img7 from "../assets/Products/p01.png";
import img8 from "../assets/Products/p01.png";
import img9 from "../assets/Products/p01.png";
import img10 from "../assets/Products/p01.png";

// ✅ Store image + title + description
const products = [
  { image: img1, title: "Product 1", description: "High-quality, durable and stylish." },
  { image: img2, title: "Product 2", description: "Perfect for everyday use and comfort." },
  { image: img3, title: "Product 3", description: "Sleek design meets modern needs." },
  { image: img4, title: "Product 4", description: "A must-have for fashion lovers." },
  { image: img5, title: "Product 5", description: "Engineered for top performance." },
  { image: img6, title: "Product 6", description: "Elegant finish with premium build." },
  { image: img7, title: "Product 7", description: "Eco-friendly and affordable." },
  { image: img8, title: "Product 8", description: "Smart features in a compact design." },
  { image: img9, title: "Product 9", description: "Minimalistic and functional." },
  { image: img10, title: "Product 10", description: "Built for versatility and comfort." },
];

// ✅ Dot colors
const dots = [
  "#DE443B", "#28a745", "#007bff", "#ff9800", "#9c27b0",
  "#00bcd4", "#e91e63", "#3f51b5", "#8bc34a", "#795548",
];

function Arrow({ direction, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full cursor-pointer z-10 ${
        direction === "left" ? "left-4" : "right-4"
      }`}
    >
      {direction === "left" ? "❮" : "❯"}
    </div>
  );
}

export default function SliderP() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    arrows: true,
    beforeChange: (_, next) => setActiveIndex(next),
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (!sliderRef.current) return;

      if (e.deltaY < 0) {
        sliderRef.current.slickPrev();
      } else {
        sliderRef.current.slickNext();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <HellBackground color={dots[activeIndex]} className="absolute inset-0 z-0" />

      {/* Dots */}
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        {dots.map((color, i) => (
          <button
            key={i}
            onClick={() => sliderRef.current?.slickGoTo(i)}
            className={`w-4 h-4 rounded-full border border-white transition ${
              activeIndex === i ? "scale-125" : "opacity-50"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className="h-full z-10 text-white">
        {products.map((product, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-h-screen"
          >
            <div className="text-center px-4 max-w-xl mx-auto space-y-6">
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto max-h-[400px] object-contain rounded-xl shadow-lg"
              />
              <h2 className="text-3xl font-bold">{product.title}</h2>
              <p className="text-gray-200 text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
