import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Our son loved his book! Such a wonderful gift. He reads it every night before bed and loves seeing himself as the hero!",
      author: "Sarah M.",
      rating: 5,
      color: "from-pink-400 to-purple-600"
    },
    {
      text: "The quality is amazing and the story was so creative. My daughter carries her book everywhere she goes!",
      author: "Michael R.",
      rating: 5,
      color: "from-blue-400 to-teal-600"
    },
    {
      text: "Perfect for building confidence! My shy little one now believes she can be anything. Thank you for this magical experience!",
      author: "Emma L.",
      rating: 5,
      color: "from-green-400 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            What Parents Are Saying
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Join thousands of families who have created magical memories with Punchi Katha
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center mb-4`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-blue-700 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center mr-3`}>
                    <span className="text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">{testimonial.author}</p>
                    <p className="text-blue-600 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;