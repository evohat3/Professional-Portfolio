import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const banner1 = document.getElementById("banner1");
      const banner2 = document.getElementById("banner2");
      const scrollPosition = window.pageYOffset;

      banner1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      banner2.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex-rows h-screen overflow-x-hidden">
      <div
        id="banner1"
        className="h-1/4 bg-black w-screen text-white flex items-center justify-center mt-8"
      >
        <div className="text-center text-4xl">Welcome To My Portfolio!</div>
      </div>

      <div
        id="banner2"
        className="h-1/3 bg-black w-screen text-white flex items-center justify-center mt-8"
      >

          <div className="text-center text-2xl mt-4">
            Click on the links above to learn more about me and my projects!
          </div>
      
      </div>




    </div>
  );
}
