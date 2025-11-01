import React from "react";
import { Header } from "@components/layout/Header";
import { Heart } from "lucide-react";

export default function RSVP() {
  return (
    <>
      <Header
        title="RSVP"
        subtitle="We can’t wait to celebrate with you!"
      />

      <section className="bg-rose-50 py-16 px-6 min-h-screen flex flex-col items-center">
        {/* Intro text */}
        <div className="max-w-2xl text-center mb-12">
          <Heart className="w-10 h-10 text-rose-400 mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Let us know if you’ll be joining us 💌
          </h2>
          <p className="text-lg text-gray-600">
            Please take a moment to fill out the form below and share your
            details. It only takes a minute — and means the world to us.
          </p>
        </div>

        {/* Embedded Google Form */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-3xl p-4 md:p-6">
          <div className="aspect-[3/2] sm:aspect-[4/3]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfUSC87NKGXXGSvGQsCtbDF92QV4_-6rshGw-Zosvk3Ojc0hg/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="RSVP Form"
              className="w-full h-[80vh] rounded-xl"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Optional footer note */}
        <p className="text-gray-500 text-sm mt-10">
          Your responses are private and will only be seen by us.
        </p>
      </section>
    </>
  );
}
