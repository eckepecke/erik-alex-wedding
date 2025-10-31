import React from 'react';

export const ImportantNotes = () => {
  return (
    <section className="bg-rose-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
          Important Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Weather Considerations</h4>
            <p className="text-gray-600 text-sm">
              June weather in Vienna is typically beautiful, but we have an indoor backup 
              plan in case of rain. Bring a light jacket for the evening.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Parking</h4>
            <p className="text-gray-600 text-sm">
              Free parking is available at the venue. Valet service will be provided. 
              We also recommend taxi services for those who wish to enjoy the open bar!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Children</h4>
            <p className="text-gray-600 text-sm">
              While we love your little ones, we've decided to make our wedding an 
              adults-only celebration. We hope this gives parents a night off to relax!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Dietary Requirements</h4>
            <p className="text-gray-600 text-sm">
              Please let us know of any dietary restrictions or allergies when you RSVP. 
              We'll work with our caterers to accommodate all needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};