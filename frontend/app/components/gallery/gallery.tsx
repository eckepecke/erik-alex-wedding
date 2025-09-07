import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Gallery({ images }: { images: string[] }) {
 return (
    <div className="centered-content">
      <div className="gallery-carousel-container">
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        swipeable={true}
        autoPlay={true}
        interval={4000}
        dynamicHeight={true}
        >
          {images.map((src, index) => (
            <div className="rounded-corners" key={index}>
              <img src={src} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );

}