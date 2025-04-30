import { Location as LocationComponent }  from "../components/location/location";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "location" },
    { name: "location", content: "" },
  ];
}

export default function Location() {
  return <LocationComponent />;
}