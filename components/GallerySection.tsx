import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const GallerySection = () => {
  const images = [
    "/static/images/gallery-1.png",
    "/static/images/gallery-2.png",
    "/static/images/gallery-3.png",
    "/static/images/gallery-4.png",
  ]; // Placeholder images, replace with your own images

  return (
    <div className="w-full h-auto bg-black">
      <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        transitionTime={1000}
      >
        {images.map((img, index) => (
          <div key={index} className="h-full w-full">
            <img className="w-96 h-96 object-cover" src={img} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GallerySection;
