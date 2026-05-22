import React, { useState, useEffect } from "react";
import Bondu_1 from "../assets/bondu_1.jpg";
import Bondu_2 from "../assets/bondu_2.jpg";
import Bondu_3 from "../assets/bondu_3.jpg";
import us_1 from "../assets/us_1.jpeg";
import us_2 from "../assets/us_2.jpeg";
import us_3 from "../assets/us_3.jpeg";
import us_4 from "../assets/us_4.jpeg";
function Final() {
  const [messageSize, setMessageSize] = useState("1rem");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Animate message appearance
    const timer1 = setTimeout(() => {
      setShowMessage(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setMessageSize("3rem");
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
   
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden bg-gradient-to- from-pink-200 via-white to-pink-400">
        {/* Animated Background Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              💕
            </div>
          ))}
        </div>

        {/* Main Message with entrance animation */}
        <div
          className={`transition-all duration-1000 transform ${
            showMessage ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <h1
            style={{ fontSize: messageSize }}
            className="text-[#d63384] font-bold text-center mb-12 transition-all duration-1000 ease-out drop-shadow-2xl"
          >
            Yay! Happy Valentine's Day aloo! ❤️
          </h1>
        </div>

        {/* Floating Images Container - Responsive Grid */}
        <div className="relative w-full max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Image 1 */}
          <div className="flex justify-center items-center animate-float-1">
            <div className="group relative">
              <img
                src={Bondu_2}
               
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-pink-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-pink-500/50"
              />
              <div className="absolute -top-2 -right-2 text-4xl animate-bounce">
                💖
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="flex justify-center items-center animate-float-2">
            <div className="group relative">
              <img
                src={Bondu_2}
                
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-pink-400 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-pink-600/50"
              />
              <div className="absolute -top-2 -left-2 text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>
                💕
              </div>
            </div>
          </div>

          {/* Image 3 */}
          <div className="flex justify-center items-center animate-float-3 col-span-2 md:col-span-1">
            <div className="group relative">
              <img
                src={Bondu_2}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-pink-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-pink-700/50"
              />
              <div className="absolute -bottom-2 -right-2 text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>
                💗
              </div>
            </div>
          </div>
        </div>

        {/* Heart Emojis Row */}
        <div className="flex gap-4 md:gap-8 text-4xl md:text-6xl mb-8">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>💕</span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💖</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💗</span>
          <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>💓</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💞</span>
        </div>

        {/* Sweet Message Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl transform hover:scale-105 transition-transform duration-300">
          <p className="text-xl md:text-3xl text-[#d63384] text-center font-bold leading-relaxed mb-4">
            You make my heart skip a beat! 💝
          </p>
          <p className="text-lg md:text-xl text-pink-600 text-center font-semibold">
            Forever yours ✨
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="text-2xl animate-pulse">🌹</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>🌹</span>
            <span className="text-2xl animate-pulse" style={{ animationDelay: '1s' }}>🌹</span>
          </div>
        </div>

        {/* Sparkles */}
        <div className="mt-8 flex gap-4 text-3xl">
          <span className="animate-spin">✨</span>
          <span className="animate-ping">⭐</span>
          <span className="animate-spin" style={{ animationDelay: '0.5s' }}>✨</span>
        </div>
      </div>
   
  );
}

export default Final;