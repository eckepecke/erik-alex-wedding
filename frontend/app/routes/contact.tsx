import { Contact as ContactComponent }  from "../components/contact/contact";

// {}: Route.MetaArgs
export function meta() {
  return [
    { title: "Contact" },
    { name: "contact", content: "" },
  ];
}

export default function Contact() {
  return <ContactComponent />;
}