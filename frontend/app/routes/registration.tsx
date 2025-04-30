import { Registration as RegistrationComponent }  from "../components/registration/registration";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "registration" },
    { name: "registration", content: "" },
  ];
}

export default function Registration() {
  return <RegistrationComponent />;
}