import { HomePage } from "~/components/home/home";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "Emilla & Viktors Bröllop" },
    { name: "Emilla & Viktors Bröllop", content: "" },
  ];
}

export default function Home() {
  return <HomePage />;
}
