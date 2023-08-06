import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 bg-black px-4 md:px-32">
      <div className="order-1 md:order-none relative pl-5 pb-10 md:w-full mb-10 md:mb-0 justify-center items-center">
        <div className="relative h-[300px] md:h-[900px] overflow-hidden bg-black opacity-50">
          <Image
            src="/static/images/anubis-bg.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/static/logo/palm-logo.png"
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
        </div>
      </div>
      <div className="order-2 md:order-none flex flex-col justify-center items-center text-white mb-10 p-4 md:p-10 text-center">
        <h1 className="text-sm md:text-xl font-medium leading-tight font-integral leading-normal">Welcome to Illusion Palm Beach, Alanya's premier beachside retreat. Bask in the sunlight by day and immerse yourself in the rhythmic beats of our music by night...</h1>
        <button className="mt-4 px-4 md:px-8 py-2 bg-red-600 text-white text-sm font-bold rounded shadow">More Info</button>
      </div>
      <div className="order-4 md:order-none flex flex-col justify-center items-center text-white mb-10 p-4 md:p-10 text-center">
        <h1 className="text-sm md:text-xl font-medium leading-tight font-integral leading-normal">Welcome to Elalem Meyhane, a modern reimagining of Turkey's traditional 'Meyhane' experience nestled in the heart of Alanya's picturesque seaside marina...</h1>
        <button className="mt-4 px-4 md:px-8 py-2 bg-red-600 text-white text-sm font-bold rounded shadow">More Info</button>
      </div>
      <div className="order-3 md:order-none relative pl-5 pb-10 md:w-full mb-10 md:mb-0 justify-center items-center">
        <div className="relative h-[300px] md:h-[900px] overflow-hidden bg-black opacity-50">
          <Image
            src="/static/images/elalem-img.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/static/logo/elalem-logo.png"
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
        </div>
      </div>
      
      <div className="order-5 md:order-none relative pl-5 pb-10 md:w-full mb-10 md:mb-0 justify-center items-center">
        <div className="relative h-[300px] md:h-[900px] overflow-hidden">
          <Image
            src="/static/logo/assa-black-logo.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <div className="order-6 md:order-none flex flex-col justify-center items-center text-white mb-10 p-4 md:p-10 text-center">
        <h1 className="text-sm md:text-xl font-medium leading-tight font-integral leading-normal">Welcome to Elalem Meyhane, a modern reimagining of Turkey's traditional 'Meyhane' experience nestled in the heart of Alanya's picturesque seaside marina...</h1>
        <button className="mt-4 px-4 md:px-8 py-2 bg-red-600 text-white text-sm font-bold rounded shadow">More Info</button>
      </div>
    </div>
  )
}
