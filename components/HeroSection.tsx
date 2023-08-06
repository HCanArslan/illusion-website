import React from 'react';
import { Button } from './Button';

const HeroSection: React.FC = () => {
  return (
    <div className="HeroSection relative bg-white w-full h-full ">
      <img className="w-full h-screen object-cover" src="/static/images/hero-section-1.png" alt="Hero" />
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 absolute top-1/2 left-4 sm:left-20 transform -translate-y-1/2 px-2 sm:px-10 text-left grid gap-2 sm:gap-4">
        <div className="text-white text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold font-integral tracking-widest mb-2 sm:mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3">
          DIVE INTO THE MYSTERY OF ALANYA'S BEST NIGHTLIFE EXPERIENCE <br className="hidden sm:block"/>ILLUSION EVENT HALL.
        </div>
        <div className="inline-flex gap-2 sm:gap-4">
          <Button label="TICKETS" type="primary" />
          <Button label="RESERVATION" type="secondary" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
