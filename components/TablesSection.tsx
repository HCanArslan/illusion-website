import React from 'react';

const TablesSection: React.FC = () => {
  return (
    <div className="relative bg-white w-full h-screen flex flex-col justify-center items-center md:items-start md:justify-start">
      <div className="absolute inset-0 w-full h-full object-cover bg-cover bg-center shadow-inset-shadow" style={{ backgroundImage: 'url(/static/images/illusion-event-tables.png)' }} />

      <div className="z-10 text-center md:text-left text-white grid gap-4 px-6 md:px-8 w-full md:w-1/2 lg:w-1/3 max-w-screen-md">
        <h2 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold font-integral">READY FOR AN UNFORGETTABLE NIGHT AT ILLUSION EVENT HALL?</h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light italic">Your personal haven, exceptional bottle service, and all-access pass to every open area are just the beginning.</p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">We've curated a range of VIP table service packages to amplify your night, including entrance fee, select spirits, dedicated cloakroom, private restroom facilities, and fast-track entrance. Step into the enchanting realm of Alanya's finest nightlife experience – only at Illusion Event Hall.</p>
      </div>

      <button className="z-10 md:absolute bottom-8 md:bottom-24 lg:bottom-[80px] mx-auto md:mx-0 md:left-8 lg:left-[138px] bg-red-600 hover:bg-red-700 py-2 md:py-4 px-4 md:px-8 rounded shadow-md transition-all ease-in-out duration-300">
        <span className="text-white text-xs md:text-sm lg:text-lg font-bold">TICKETS</span>
      </button>
    </div>
  );
}

export default TablesSection;
