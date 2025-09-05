import { AboutUs }  from "../components/about/about";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "Om oss" },
    { name: "Om oss", content: "" },
  ];
}

export default function About() {
  return <AboutUs />;
}