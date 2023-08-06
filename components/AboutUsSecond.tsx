// TwoColumnCard.tsx

import React from 'react';

const AboutUsSecond: React.FC = () => {
  return (
    <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Replace 'image_url_1' with the actual image URL */}
          <div
            className="h-40 bg-cover bg-center rounded-lg mb-4"
            style={{
              backgroundImage: `url('image_url_1')`,
            }}
          />
          <h2 className="text-xl font-bold">Card Title 1</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dignissim euismod erat vel feugiat.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Replace 'image_url_2' with the actual image URL */}
          <div
            className="h-40 bg-cover bg-center rounded-lg mb-4"
            style={{
              backgroundImage: `url('image_url_2')`,
            }}
          />
          <h2 className="text-xl font-bold">Card Title 2</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dignissim euismod erat vel feugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSecond;
