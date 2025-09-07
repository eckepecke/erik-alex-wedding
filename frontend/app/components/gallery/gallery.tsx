import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const images = [
  "/aboutus/adventure.JPG", "/aboutus/deer.JPG", "/aboutus/japan.JPG", "/aboutus/moln.jpg", "/aboutus/present.jpg", "/aboutus/ragnar.jpg", "/aboutus/seek.jpg", "/aboutus/skiing.jpg", "/aboutus/snobbar.jpg", "/aboutus/split.jpg",
];

export function Gallery() {
 return (
    <div className="centered-content">
      <div className="gallery-carousel-container">
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} swipeable={true}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );

}