import { Location as LocationComponent }  from "../components/location/location";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "Lokalen" },
    { name: "Lokalen", content: "" },
  ];
}

export default function Location() {
  return <LocationComponent />;
}