import { Registration as RegistrationComponent }  from "../components/registration/registration";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "Anmälan" },
    { name: "Anmälan", content: "" },
  ];
}

export default function Registration() {
  return <RegistrationComponent />;
}