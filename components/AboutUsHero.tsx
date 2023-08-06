import React from "react";

const AboutUsHero = () => {
  return (
    <div className="w-full h-full relative ">
      <div
        className="w-full h-screen md:h-screen bg-cover bg-center shadow-inner"
        style={{ backgroundImage: "url('static/images/aboutus-image.png')" }}
      />
      <div className="w-full md:w-full absolute bg-black bg-opacity-70 p-4 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] px-4 sm:px-8 md:px-12 lg:px-16">
        <div>
          <div className="text-white text-4xl md:text-5xl font-medium">
            BEYOND THE MUSIC: THE LEGACY OF ILLUSION EVENT HALL ON ALANYA'S CULTURAL LANDSCAPE.
          </div>
        </div>
        <div className="text-white">
          <div className="text-xl md:text-2xl font-medium mb-6">
            Formerly known as a local gathering spot, Illusion Event Hall has redefined the atmosphere of Alanya's nightlife since its grand reopening. Over the years, we've championed values of inclusivity, diversity, creativity, quality, and freedom.
          </div>
          <div className="text-lg md:text-xl font-normal">
            Illusion Event Hall is now a major player in Alanya's nightlife, attracting not only local visitors but also an international crowd. Thanks to our diverse and global programming, Illusion Event Hall has gained recognition worldwide. Whether you're seeking an electrifying night out or a taste of Alanya's vibrant nightlife, we aspire to deliver an unforgettable experience!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero
