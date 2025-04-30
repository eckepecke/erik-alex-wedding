import { AboutUs }  from "../components/about/about";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "About" },
    { name: "about", content: "" },
  ];
}

export default function About() {
  return <AboutUs />;
}