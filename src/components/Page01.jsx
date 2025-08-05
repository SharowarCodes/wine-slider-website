// import React from "react";
// import Head from "./Head";
// // import wineImg from "../assets/wine-bottle.png"; // Make sure this image exists in your assets

// export default function Showcase() {
//   const today = new Date().toLocaleDateString("en-US", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div className="w-full min-h-screen bg-transparent flex flex-col items-start">
//       {/* Header */}
//       <Head
//         title="Welcome to VinoVault"
//         description="Discover handcrafted wines from around the world."
//       />

//       {/* Middle Content */}
//       <div className="flex flex-1 justify-center items-center w-full relative px-6 py-20">
//         {/* Center Image */}
//         <img
//           src="{wineImg}"
//           alt="Wine Bottle"
//           className="h-80 object-contain"
//         />

//         {/* Date on Right Side */}
//         <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right text-gray-600 text-lg">
//           {today}
//         </div>
//       </div>
//     </div>
//   );
// }
