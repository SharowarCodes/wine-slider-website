import React from "react";

export default function Head({ title, description }) {
  return (
    <div className="text-left max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
}
