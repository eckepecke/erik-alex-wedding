import { Gallery } from "../gallery/gallery";

const images: string[] = [
  "/aboutus/adventure.JPG",
  "/aboutus/deer.JPG",
  "/aboutus/japan.JPG",
  "/aboutus/moln.jpg",
  "/aboutus/present.jpg",
  "/aboutus/ragnar.jpg",
  "/aboutus/seek.jpg",
  "/aboutus/skiing.jpg",
  "/aboutus/snobbar.jpg",
  "/aboutus/split.jpg",
];

export function AboutUs() {
   return <div className="centered-content">
      <h1>About Us</h1>
      <Gallery images={images} />
   </div>
}