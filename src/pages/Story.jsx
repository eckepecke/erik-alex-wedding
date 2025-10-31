import React from 'react';
import { Header } from '@components/layout/Header';
import { Card } from '@components/ui/Card';
import { Heart, Coffee, Plane, Sparkles } from 'lucide-react';

const Story = () => {
const milestones = [
  {
    icon: Coffee,
    title: 'First Meeting',
    date: 'Summer 2019',
    description: 'We met at a cozy coffee shop in Vienna. James accidentally took Sarah\'s cappuccino order, and instead of being annoyed, Sarah laughed. That laugh changed everything. We ended up talking for hours, completely losing track of time.'
  },
  {
    icon: Heart,
    title: 'First Date',
    date: 'August 2019',
    description: 'Three days after our coffee shop encounter, James worked up the courage to ask Sarah out. We went to Prater Park, rode the Ferris wheel, and watched the sunset over the city. By the end of the night, we both knew this was something special.'
  },
  {
    icon: Plane,
    title: 'Our First Trip',
    date: 'December 2020',
    description: 'Despite the challenges of 2020, we managed to take our first trip together to the Austrian Alps. We spent a week skiing, drinking hot chocolate, and dreaming about our future together. It was the trip where we both realized this was forever.'
  },
  {
    icon: Sparkles,  // Changed from Ring to Sparkles
    title: 'The Proposal',
    date: 'March 2024',
    description: 'James brought Sarah back to the same coffee shop where we first met. He had secretly arranged with the barista to call out the wrong name again. When Sarah opened the cup, she found a note that said "This time, I got your order right" with a ring tied to it. Through happy tears, she said yes.'
  }
];

  return (
    <>
      <Header 
        title="Our Love Story" 
        subtitle="Two koopas, one shell <3"
      />

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            They say the best love stories start with the unexpected. Ours began with 
            a mistaken coffee order, a missed train, and two strangers who couldn't 
            stop talking. Five years later, we're ready to write our next chapter together.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <Card key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <milestone.icon className="w-8 h-8 text-rose-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-serif text-gray-800">
                      {milestone.title}
                    </h3>
                    <span className="text-rose-500 font-medium mt-1 md:mt-0">
                      {milestone.date}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Connector line (except for last item) */}
              {index < milestones.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-rose-200" />
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-rose-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="w-12 h-12 text-rose-400 mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Join Us in Celebrating
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We can't wait to share our special day with the people who mean the most to us.
          </p>
          <a 
            href="/rsvp" 
            className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            RSVP Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Story;