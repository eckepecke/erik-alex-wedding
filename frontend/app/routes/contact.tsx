import { Contact as ContactComponent }  from "../components/contact/contact";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "contact" },
    { name: "contact", content: "" },
  ];
}

export default function Contact() {
  return <ContactComponent />;
}