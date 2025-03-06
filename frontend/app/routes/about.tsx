import { AboutUs }  from "../components/about/about";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to about page" },
  ];
}

export default function About() {
  return <AboutUs />;
}