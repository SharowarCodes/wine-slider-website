import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import HellBackground from "./HellBackground";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import 10 different product images
import img1 from "../assets/Products/p01.png";
import img2 from "../assets/Products/p02.png";
import img3 from "../assets/Products/p03.png";
import img4 from "../assets/Products/p04.png";
import img5 from "../assets/Products/p05.png";
import img6 from "../assets/Products/p07.png";
import img7 from "../assets/Products/p06.png";
import img8 from "../assets/Products/p08.png";
import img9 from "../assets/Products/p07 copy.png";
import img10 from "../assets/Products/p08 copy.png";

// ✅ Store image + title + description
const products = [
  {
    image: img1,
    title: "Domaine de la Romanee-Conti Grand Cru 1945",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img2,
    title: "Jeroboam of Chateau Mouton-Rothschild 1945",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img3,
    title: "Château Lafite 1869",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img4,
    title: "Shipwrecked 1907",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img5,
    title: "Ampoule from Penfolds",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img6,
    title: "Egon Muller Scharzhofberger Riesling Trockenbeerenaausleese",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img7,
    title: "Speyer Wine Bottle",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img8,
    title: "Cheval Blanc 1947",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img9,
    title: "Henri Jayer, Vosne-Romanée Cros Parantoux 1999",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
  {
    image: img10,
    title: "J.S. Terrantez Madeira",
    description: (
      <>
        Each sip whispers stories of ancient vines and timeless elegance.<br />
        It’s not just a drink—it’s an experience wrapped in beauty and grace.
      </>
    ),
  },
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

export default function SliderP({ activeIndex, setActiveIndex }) {
  const sliderRef = useRef(null);
  // ... rest of the code stays same


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
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
            className={`w-1 h-1 rounded-full border border-white transition ${
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
            <div className="text-center mt-[120px] px-4 max-w-xl mx-auto space-y-6">
              <img
                src={product.image}
                alt={product.title}
                className="mx-auto max-h-[400px] object-contain rounded-xl "
              />
              <h2 className="text-3xl font-bold">{product.title}</h2>
              <p className="text-white text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
