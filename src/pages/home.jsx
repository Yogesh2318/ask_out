import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";
import ParticlesBackgroundGrab from "./ParticlesBackgroundGrab";
function Home() {
  const [yesSize, setYesSize] = useState("0.5rem");
  const [noSize, setNoSize] = useState("0.5rem");
  const [emojiIndex, setEmojiIndex] = useState(0);

  const nav = useNavigate();

  const pleadingEmojis = [
    "🙂",
    "🥺",
    "🥹",
    "😢",
    "😭",
    "🧎‍♂️🙏",
  ];

  function enlargeYes() {
    const newYesSize = parseFloat(yesSize) + 0.5;
    setYesSize(newYesSize + "rem");

    const newNoSize = Math.max(parseFloat(noSize) - 0.2, 0.2);
    setNoSize(newNoSize + "rem");

    // move to next emoji (stop at last)
    setEmojiIndex((prev) =>
      prev < pleadingEmojis.length - 1 ? prev + 1 : prev
    );
  }

  function redirectToFinal() {
    
    nav("/final");
  }

  return (
    <ParticlesBackground>
       <ParticlesBackgroundGrab>
      <div className="text-center mt-16 relative z-10 flex flex-col items-center justify-center">

        <h1 className="text-4xl text-[#d63384] drop-shadow-md">
          Will u be my valentine? aloo.{" "}
        </h1>
        <div className="text-9xl mt-4 ">
          {pleadingEmojis[emojiIndex]}
        </div>
       
        <div className="mt-8">
          <button
            style={{ fontSize: yesSize }}
            className="mr-4 px-8 py-4 bg-[#ff69b4] text-white border-0 rounded-xl cursor-pointer font-bold transition-all duration-300 hover:bg-[#ff1493] hover:scale-105"
            onClick={redirectToFinal}
          >
            Yes!
          </button>

          <button
            onClick={enlargeYes}
            style={{ fontSize: noSize }}
            className="px-8 py-4 bg-[#ffb6c1] text-[#d63384] border-2 border-[#d63384] rounded-xl cursor-pointer font-bold transition-all duration-300 hover:bg-[#ffc0cb]"
          >
            No!
          </button>
        </div>
      </div>
      </ParticlesBackgroundGrab>
    </ParticlesBackground>
  );
}

export default Home;