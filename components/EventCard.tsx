import React from 'react';
import { Button } from './Button';

interface CardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  type: string;
  showButtons?: boolean; // <-- showButtons prop added, optional and default value is false
}

const EventCard: React.FC<CardProps> = ({ title, description, image, date, type, showButtons = false }) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = dateObj.getDate();
  
  return (
    <div className="relative bg-black overflow-hidden rounded shadow-lg flex flex-col items-center justify-end p-4 my-4 h-auto min-h-[300px] sm:min-h-[250px]">
      <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={title} />
      <div className="absolute top-0 left-0 p-4">
        <div className="text-white text-lg font-integral">{month}</div>
        <div className="text-white text-4xl font-integral">{day}</div>
      </div>
      {showButtons && (
        <div className="z-10 w-full p-4 bg-black bg-opacity-50">
          <Button label="TICKETS" type={type === 'primary' ? 'primary' : 'secondary'} />
          <Button label="RESERVATION" type={type === 'primary' ? 'secondary' : 'primary'} />
        </div>
      )}
    </div>
  );
};

export default EventCard;
