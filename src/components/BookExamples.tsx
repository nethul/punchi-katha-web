import React from 'react';
import { Star } from 'lucide-react';

const BookExamples = () => {
  const books = [
    {
      title: "The Space Adventure",
      description: "Join brave astronauts on an intergalactic journey",
      color: "from-blue-400 to-purple-600",
      emoji: "🚀"
    },
    {
      title: "The Magical Forest",
      description: "Discover enchanted creatures in a mystical woodland",
      color: "from-green-400 to-teal-600",
      emoji: "🌳"
    },
    {
      title: "Under the Sea",
      description: "Swim with friendly dolphins and colorful fish",
      color: "from-cyan-400 to-blue-600",
      emoji: "🐠"
    },
    {
      title: "The Dragon Kingdom",
      description: "Befriend dragons and save the magical kingdom",
      color: "from-orange-400 to-red-600",
      emoji: "🐉"
    }
  ];

  return (
    <section id="book-examples" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Magical Story Adventures
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Explore some of our most popular story themes that children absolutely love!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full">
                <div className={`w-full h-40 bg-gradient-to-br ${book.color} rounded-xl mb-4 flex items-center justify-center`}>
                  <div className="text-6xl">{book.emoji}</div>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {book.title}
                </h3>
                <p className="text-blue-600 mb-4">
                  {book.description}
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-blue-600">Popular Choice</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookExamples;